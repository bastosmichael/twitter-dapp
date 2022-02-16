var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
const { API_URL, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      from: "0x0000000000000000000000000000000000000001"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};