# diep-builds

- Archival cronjob runs every 15 mins.
- Builds may be accessed via `https://cdn.jsdelivr.net/gh/Nul-led/diep-builds@latest/{YOUR_BUILD}/{YOUR_FILE}` (recommended) or through `raw.github.com`.
- `history.json` only stores SHA-1 hashes of the client build (wasm) for now. May change later to store additional data there too.
