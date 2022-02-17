const Twitter = artifacts.require("Twitter");
const namehash = require("eth-ens-namehash");

module.exports = async function(deployer, _network, accounts) {
  await deployer.ens.setAddress(
    "alice.name", accounts[0], { from: accounts[0] }
  );
  await deployer.ens.setAddress(
    "donald.name", accounts[1], { from: accounts[0] }
  );

  await deployer.deploy(Twitter, deployer.ens.registryAddress);
  const twitter = await Twitter.deployed();

  // User 1
  await twitter.tweet("Today I feel great!");
  await twitter.tweet("Who want to party this weekend?");
  await twitter.tweet("I HATE the butterfly keyboard of macbook pro...");

  // User 2
  await twitter.tweet("I want to make America great again!", {from: "donald.name"});
  await twitter.tweet("Build the wall!", {from: "donald.name"});

  //that's how you can retrieve the name associated to an address
  // await twitter.resolve(namehash.hash('alice.name'));
  // await twitter.resolve(namehash.hash('donald.name'));
};
