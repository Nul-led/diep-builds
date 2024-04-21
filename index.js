import github from "@actions/github";
import { Octokit } from "@octokit/action";
import Remote from "./src/Remote.js";
import { createHash } from "crypto";

const html = await Remote.getHTML();
if (!html) throw "Could not aquire html file";

const bootstrapFileName = html.match(/index\.[a-f0-9]{8}\.js\?[a-f0-9]{20}/);
if (!bootstrapFileName) throw "Could not find bootstrap file path in html file";

const bootstrap = await Remote.getJS(bootstrapFileName[0]);
if (!bootstrap) throw "Could not aquire bootstrap file";

const wasmFileName = bootstrap.match(/([a-fA-F0-9]{20}\.wasm)/);
if (!wasmFileName) throw "Could not find wasm file path in bootstrap file";

const wasm = await Remote.getWASM(wasmFileName[0]);
if (!wasm) throw "Could not aquire wasm file";

const hash = createHash("sha1").update(wasm).digest("hex");

if (process.env.GITHUB_TOKEN) {
  const octokit = new Octokit();
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;

  const { data: historyFile } = await octokit.repos.getContent({
    owner,
    repo,
    path: "history.json",
  });

  const history = JSON.parse(atob(historyFile.content));
  if (history[0] === hash) {
    console.log("No new build found");
    process.exit();
  }
  history.unshift(hash);

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: "history.json",
    message: `Update History - ${hash}`,
    content: Buffer.from(JSON.stringify(history)).toString("base64"),
    sha: historyFile?.sha,
  });

  const { data: currentHtmlFile } = await octokit.repos.getContent({
    owner,
    repo,
    path: "current.html",
  });

  const { data: currentBootstrapFile } = await octokit.repos.getContent({
    owner,
    repo,
    path: "current.js",
  });

  const { data: currentBuildFile } = await octokit.repos.getContent({
    owner,
    repo,
    path: "current.wasm",
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: "current.html",
    message: `Update Current HTML Build - ${hash}`,
    content: Buffer.from(html).toString("base64"),
    sha: currentHtmlFile?.sha,
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: "current.js",
    message: `Update Current Bootstrap Build - ${hash}`,
    content: Buffer.from(bootstrap).toString("base64"),
    sha: currentBootstrapFile?.sha,
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: "current.wasm",
    message: `Update Current Client Build - ${hash}`,
    content: Buffer.from(wasm).toString("base64"),
    sha: currentBuildFile?.sha,
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: `${hash}/${hash}.html`,
    message: `Add HTML Build - ${hash}`,
    content: Buffer.from(html).toString("base64"),
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: `${hash}/${hash}.js`,
    message: `Add Bootstrap Build - ${hash}`,
    content: Buffer.from(bootstrap).toString("base64"),
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: `${hash}/${hash}.wasm`,
    message: `Add Client Build - ${hash}`,
    content: Buffer.from(wasm).toString("base64"),
  });

  console.log("Successfully cached new build", hash);
}
