# 北斗计划示例

## 编译
### 使用solcjs

```sh
$ solcjs ./contracts/MeatCoin.sol --bin --abi
```

### 使用cfxtruffle
```sh
$ cfxtruffle compile
```

## 部署

### 使用js-conflux-sdk部署
```
$ node ./scripts/deploy.js
```

### 使用cfxtruffle部署
需要先启动[docker实例](https://github.com/Conflux-Chain/conflux-docker)
```
$ cfxtruffle deploy --reset --network development
```

## 交互

### 使用js-conflux-sdk交互
```
$ node ./scripts/invoke.js
```

### 使用cfxtruffle交互
```
$ cfxtruffle exec ./scripts/demo_exec.js
```

## 测试

```
$ cfxtruffle test
```
