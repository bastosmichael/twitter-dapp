var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
const { API_URL, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id: 4,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};