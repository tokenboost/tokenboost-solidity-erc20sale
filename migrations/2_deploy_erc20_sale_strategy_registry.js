const ERC20SaleStrategyRegistry = artifacts.require("ERC20SaleStrategyRegistry");

module.exports = function (deployer) {
    deployer.deploy(ERC20SaleStrategyRegistry, {overwrite: false});
};
