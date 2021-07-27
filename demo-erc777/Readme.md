# ERC777 示例

由于Conflux 1820合约地址与ETH不同，下载@openzepplin/contracts后需要修改 `@openzeppelin/contracts/token/ERC777/ERC777.sol`中 1820合约 地址为`0x88887eD889e776bCBe2f0f9932EcFaBcDfCd1820`

```js
IERC1820Registry constant internal _ERC1820_REGISTRY = IERC1820Registry(0x88887eD889e776bCBe2f0f9932EcFaBcDfCd1820);
```