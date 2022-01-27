const Twitter = artifacts.require("Twitter");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(Twitter);
  const twitter = await Twitter.deployed();

  // User 1
  await twitter.tweet("Today I feel great!");
  await twitter.tweet("Who want to party this weekend?");
  await twitter.tweet("I HATE the butterfly keyboard of macbook pro...");

  // User 2
  await twitter.tweet("I want to make America great again!", {from: accounts[1]});
  await twitter.tweet("Build the wall!", {from: accounts[1]});
};
