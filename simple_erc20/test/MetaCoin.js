const MetaCoin = artifacts.require("MetaCoin");

const { expect } = require('chai');
const { expectEvent, BN } = require("@openzeppelin/test-helpers");
const { COPYFILE_EXCL } = require('constants');
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MetaCoin", function (accounts) {
  it("should transfer accurate", async function () {
    const metacoin = await MetaCoin.deployed();
    // get balance before sendCoin
    const preUser0Balance = await metacoin.getBalance(accounts[0])
    const preUser1Balance = await metacoin.getBalance(accounts[1])

    // sendCoin
    const receipt = await metacoin.sendCoin(accounts[1], 1)

    expectEvent(receipt, "Transfer", {
      _from: toChecksumdHexAddress(accounts[0]),
      _to: toChecksumdHexAddress(accounts[1]),
      _value: new BN(1)
    })

    // check balance after sendCoin
    const postUser0Balance = await metacoin.getBalance(accounts[0])
    const postUser1Balance = await metacoin.getBalance(accounts[1])

    expect(preUser0Balance.sub(postUser0Balance)).to.bignumber.equal(new BN(1))
    expect(postUser1Balance.sub(preUser1Balance)).to.bignumber.equal(new BN(1))
  });
});

function toChecksumdHexAddress(cip37Address) {
  const hexAddr = cfxsdk.format.hexAddress(cip37Address)
  return cfxsdk.format.checksumAddress(hexAddr)
}