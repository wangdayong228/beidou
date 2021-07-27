const Qian = artifacts.require("Qian");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Qian, 1e20.toString(), []);
};
