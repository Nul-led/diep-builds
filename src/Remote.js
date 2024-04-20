import fetch from "node-fetch";

export default class Remote {
    static async getHTML() {
        return await (await fetch("https://diep.io/")).text();
    }

    static async getJS(file) {
        return await (await fetch(`https://diep.io/${file}`)).text();
    }

    static async getWASM(file) {
        return new Uint8Array(await (await fetch(`https://diep.io/${file}`)).arrayBuffer());
    }
}