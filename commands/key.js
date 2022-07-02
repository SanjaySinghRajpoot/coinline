var inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager.js");
const { isRequired } = require("../utils/validations.js");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key".green + "https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API key set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("key: ", key.yellow);

      return key;
    } catch (error) {
      console.log("error with your key");
    }
  },
  remove() {
    console.log("hello from remove");
  },
};

module.exports = key;
