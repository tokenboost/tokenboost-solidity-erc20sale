const FundsRaisedWidgetRenderer = artifacts.require("FundsRaisedWidgetRenderer");
const SaleAddressWidgetRenderer = artifacts.require("SaleAddressWidgetRenderer");
const TokenInfoWidgetRenderer = artifacts.require("TokenInfoWidgetRenderer");
const WithdrawFundsWidgetRenderer = artifacts.require("WithdrawFundsWidgetRenderer");
const ClaimRefundWidgetRenderer = artifacts.require("ClaimRefundWidgetRenderer");
const ERC20SaleInputsRenderer = artifacts.require("ERC20SaleInputsRenderer");
const ERC20SaleRenderer = artifacts.require("ERC20SaleRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let erc20SaleRenderer = await deployer.deploy(ERC20SaleRenderer, {overwrite: false});
        await Promise.all([
            await erc20SaleRenderer.setAdminWidgetRenderers([
                FundsRaisedWidgetRenderer.address,
                SaleAddressWidgetRenderer.address,
                TokenInfoWidgetRenderer.address,
                WithdrawFundsWidgetRenderer.address
            ]),
            await erc20SaleRenderer.setUserWidgetRenderers([
                ClaimRefundWidgetRenderer.address
            ]),
            await erc20SaleRenderer.setInputsRenderer(ERC20SaleInputsRenderer.address)
        ]);
    });
};
