# twitter-dapp
Twitter on the Ethereum Blockchain

## Truffle Configuration

### Make sure you already have
1. Download your wallet from [Metamask](https://metamask.io/)
2. Select a drop down to show/hide test networks
3. Get some Rinkeby [test ether](https://faucet.rinkeby.io/) (may take more than one provider or attempt)
4. [Signup for Infura](https://infura.io/register) to create a new project and Rinkeby API key

### Configuring Truffle Framework to the Rinkeby test network

1. Set up Truffle
```
npm install -g truffle
```

2. Install Ganache-CLI
```
npm install -g ganache-cli
```

3. In the /tests directory copy `.env.sample` over to `.env` and enter both your API_URL and MNEMONIC.

### Using it to deploy (or migrate) a contract instance

4. Run `truffle deploy --network rinkeby` in the /tests directory order to get contract deployed.

### Accessing the deployed instance and interact with it (via Truffle console)

5. Run `truffle console --network rinkeby` to load up the console 
6. Run `Twitter.deployed().then(function(instance){return instance });` to verify your contract is deployed.