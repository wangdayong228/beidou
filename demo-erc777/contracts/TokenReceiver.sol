// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
import "@openzeppelin/contracts/utils/introspection/IERC1820Registry.sol";

contract TokenReceiver is IERC777Recipient {
    IERC1820Registry internal constant ERC1820_REGISTRY =
        IERC1820Registry(0x88887eD889e776bCBe2f0f9932EcFaBcDfCd1820);

    // keccak256(abi.encodePacked("ERC777TokensRecipient"))
    bytes32 ERC777TokensRecipientInterfaceHash =
        0xb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b;

    event Received(address from, uint256 amount, string token, bytes msg);

    constructor() public {
        ERC1820_REGISTRY.setInterfaceImplementer(
            address(this),
            ERC777TokensRecipientInterfaceHash,
            address(this)
        );
    }

    function tokensReceived(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external override {
        emit Received(from, amount, IERC777(msg.sender).symbol(), userData);
    }
}
