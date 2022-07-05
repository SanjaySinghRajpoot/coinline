import { KeyManager } from "../lib/KeyManager.js";
import { CryptoAPI } from "../lib/CryptoAPI.js";

export const check = {
   async price(cmd){
      try {
        var keyManager = new KeyManager();
        const key = keyManager.getKey();

        const api = new CryptoAPI(key);

        // Using the object api to get different coin data
        const priceOutput = await api.getPriceData(cmd.coin, cmd.cur);

        console.log(priceOutput);
      } catch (error) {
        console.log(error);
      }
    }
}