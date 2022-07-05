# Coinline CLI
A CLI tool to get the latest crypto prices. 

## Usage

You have to install all the depencies required for this to work properly. Just head to the project directory and run the commands given below. 

```
npm install
```

You have to add your API keys to use this CLI tool. You can get your API key from https://nomics.com. Once you get the key run `coinline key set` and paste your API key in the cmd line. 


# Commads are 

```

# Version
coinline -V

# Help & Commands
coinline -h

# API Key Commands
coinline key set
coinline key show
coinline key remove

# Crypto Check Commands
coinline check price

# Check Specific Coins (default: BTN,ETH,XRP)
coinline check price --coin=BTC,ETH

# Choose Currency (Default: USD)
coinline check price --cur=EUR

```

# Want to contribute?

Feel free to raise an issue. Once you are assigned the issue you can send the PR to the Repo. 

Thank You