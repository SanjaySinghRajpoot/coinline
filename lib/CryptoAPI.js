import axios from 'axios';
import color  from 'color';

export class CryptoAPI{
    constructor(apiKey)
    {
         this.apiKey = apiKey;
         this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try{
          const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

          let output = '';

          res.data.forEach(coin => {
            output += `Coin: ${coin.symbol} (${coin.name}) | Price: ${coin.price} | Rank: ${coin.rank}`;  
          });

          return output;
        }catch (err){
            console.log(err);
        }
    }
}
