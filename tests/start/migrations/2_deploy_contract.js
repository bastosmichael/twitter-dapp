const Twitter = artifacts.require("Twitter");

module.exports = function(deployer) {
  deployer.deploy(Twitter);
};
