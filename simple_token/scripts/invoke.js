/* eslint-disable */
const { Conflux } = require('js-conflux-sdk');
const abi = [{ "inputs": [{ "internalType": "string", "name": "_symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "sendCoin", "outputs": [{ "internalType": "bool", "name": "sufficient", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]

const cfx = new Conflux({
    url: 'http://test.confluxrpc.org/v2',
    networkId: 1,
});

(async function invoke() {
    const accountAlice = cfx.wallet.addPrivateKey('0xa816a06117e572ca7ae2f786a046d2bc478051d0717bf5cc4f5397923258d393');
    const metaCoin = cfx.Contract({ abi, address: "CFXTEST:TYPE.CONTRACT:ACC8WEUM0HEPBUUU029E0PK9G0YU42DB7Y7ASAANG4" });
    const addressBob = 'cfxtest:aatm5bvugvjwdyp86ruecmhf5vmng5ysy2pehzpz9h';

    // 读合约
    const bobBalanceBefore = await metaCoin.getBalance(addressBob)
    // or
    // const bobBalanceBefore = await metaCoin.getBalance(addressBob).call({from:addressBob})

    // 写合约
    const receipt = await metaCoin.sendCoin(addressBob, 100)
        .sendTransaction({ from: accountAlice.address })
        .executed()
    console.log("send coin done", receipt);

    // 读合约
    const bobBalanceAfter = await metaCoin.getBalance(addressBob)
    console.log(`before send coin, bob has ${bobBalanceBefore}`)
    console.log(`after send coin, bob has ${bobBalanceAfter}`)
})()