const MetaCoin = artifacts.require("MetaCoin");

module.exports = function (deployer, network, accounts) {
  console.log("accounts:", accounts)
  console.log("netowrk:", network)

  if (network == "development") {
    // Do something specific to the network named "development".
    deployer.deploy(MetaCoin, "ABC");
  } else {
    deployer.deploy(MetaCoin, "ABC");
    // Perform a different step otherwise.
  }

  // Use the accounts within your migrations.

  // //  部署合约 并使用一些参数传递给合约的构造函数。
  // deployer.deploy(A, arg1, arg2);

  // // 设置gasLimit 和部署合约的账号
  // deployer.deploy(A, { gas: 4612388, from: "0x...." });

  // // 部署多个合约，一些包含参数，另一些没有。
  // // 这比编写三个`deployer.deploy（）`语句更快，因为部署者可以作为单个批处理请求执行部署。
  // deployer.deploy([
  //   [A, arg1, arg2],
  //   B,
  //   [C, arg1]
  // ]);
};
