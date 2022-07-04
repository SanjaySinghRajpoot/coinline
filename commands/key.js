import inquirer from "inquirer";
import colors from "colors";
import  { KeyManager } from "../lib/KeyManager.js";
import { isRequired } from "../utils/validations.js";

export const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key: ".green + "https://nomics.com",
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
      console.log("error with your key", error.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("key removed", key.green);

      return;
    } catch (error) {
      console.log("error with your key", error.message.red);
    }

  },
};

