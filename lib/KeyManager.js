import Configstore from "configstore";
// import pkg from "../package.json";

//creating a new class to access API keys 
export class KeyManager {
  constructor() {
    this.conf = new Configstore('1.0.0');
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("NO API is Present");
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("NO API is Present");
    }

    this.conf.delete('apiKey');

    return Key;
  }
}

