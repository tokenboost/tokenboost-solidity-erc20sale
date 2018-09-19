const SaleAddressWidgetRenderer = artifacts.require("SaleAddressWidgetRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let renderer = await deployer.deploy(SaleAddressWidgetRenderer);
        await Promise.all([
            await renderer.setResource("en", "sale_address", "Sale Address"),
            await renderer.setResource("en", "short_desc", "The address of the sale's contract."),
            await renderer.setResource("en", "long_desc", "Every sale has its own contract."),
            await renderer.setResource("ko", "my_balance", "세일 주소"),
            await renderer.setResource("ko", "short_desc", "세일의 계약 주소를 표시합니다."),
            await renderer.setResource("ko", "long_desc", "모든 세일은 고유의 계약을 가지고 있습니다."),
        ]);
    });
};
