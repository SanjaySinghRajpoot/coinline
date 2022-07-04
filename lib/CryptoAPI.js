import axios from 'axios';
import colors from "colors";

export class CryptoAPI{
    constructor(apiKey)
    {
         this.apiKey = apiKey;
         this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try{

          // Format Output 
          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: curOption
          });

          const response = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

          let showData = '';

          response.data.forEach(coin => {
            showData += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
              formatter.format(coin.price).green
            } | Rank: ${coin.rank.blue}\n`; 
          });

          return showData;
        }catch (err){
            console.log(err);
        }
    }
}
