const MetaCoin = artifacts.require("MetaCoin");

module.exports = async function () {

    let accounts = await web3.eth.getAccounts()

    // 获取使用 truffle 指令部署的合约
    let metacoin = await MetaCoin.deployed()

    // 读合约
    let balance = await metacoin.getBalance(accounts[0])
    console.log(`${accounts[0]} balance: ${balance}`)

    // 获取交易数据
    let requestTx = await metacoin.sendCoin.request(accounts[1], 10)
    console.log(`sendCoin tx details:`, requestTx)

    // 写合约
    let receipt = await metacoin.sendCoin(accounts[1], 10)
    console.log(`sent ${accounts[1]} 10`)

    // 获取事件
    let log = receipt.logs[0]
    console.log(`event:`, log)
}