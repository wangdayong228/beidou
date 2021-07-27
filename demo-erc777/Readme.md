# ERC777 示例

由于Conflux 1820合约地址与ETH不同，下载@openzepplin/contracts后需要修改 `@openzeppelin/contracts/token/ERC777/ERC777.sol`中 1820合约 地址为`0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24`

```js
IERC1820Registry constant internal _ERC1820_REGISTRY = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);
```