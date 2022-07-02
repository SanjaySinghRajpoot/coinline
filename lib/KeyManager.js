const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
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

    return Key;
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

module.exports = KeyManager;
