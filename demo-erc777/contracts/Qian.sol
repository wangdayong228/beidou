// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Qian is ERC777 {
    constructor(uint256 initialSupply, address[] memory defaultOperators)
        public
        ERC777("Qian", "QIAN", defaultOperators)
    {
        super._mint(msg.sender, initialSupply, "", "");
    }
}
