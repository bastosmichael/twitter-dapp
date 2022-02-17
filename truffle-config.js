var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
const { API_URL, MNEMONIC, DEV_ALICE_ADDRESS, DEV_DONALD_ADDRESS, RINKEBY_ALICE_ADDRESS, RINKEBY_DONALD_ADDRESS } = process.env;
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      accounts: [DEV_ALICE_ADDRESS,
                 DEV_DONALD_ADDRESS]
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id: 4,
      gas: 4000000,      //make sure this gas allocation isn't over 4M, which is the max,
      accounts: [RINKEBY_ALICE_ADDRESS,
                 RINKEBY_DONALD_ADDRESS]
    }
  },
  compilers: {
    solc: {
      version: '0.5.8'
    }
  },
  ens: {
    enabled: true
  }
};
