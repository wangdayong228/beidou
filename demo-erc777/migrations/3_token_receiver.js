const TokenReceiver = artifacts.require("TokenReceiver");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(TokenReceiver);
};
