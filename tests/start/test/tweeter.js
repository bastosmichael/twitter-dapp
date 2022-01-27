const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
const Twitter = artifacts.require('Twitter');

contract('Twitter', (accounts) => {
  let twitter = null;
  const user1Tweets = [
    'My first tweet - first user',
    'My second tweet - first user',
    'My third tweet - first user',
  ];
  const user2Tweets = [
    'My first tweet - second user',
    'My second tweet - second user',
    'My third tweet - second user',
  ];
  const [user1, user2] = [accounts[0], accounts[1]];
  beforeEach(async () => {
    twitter = await Twitter.new();
    await Promise.all(
      user1Tweets.map(tweet =>
        twitter.tweet(tweet, {from: user1})
      ),
      user2Tweets.map(tweet =>
        twitter.tweet(tweet, {from: user2})
      )
    );
  });
});
