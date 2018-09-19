const FundsRaisedWidgetRenderer = artifacts.require("FundsRaisedWidgetRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let renderer = await deployer.deploy(FundsRaisedWidgetRenderer);
        await Promise.all([
            await renderer.setResource("en", "funds_raised", "Funds Raised"),
            await renderer.setResource("en", "short_desc", "Total amount of ETH raised so far."),
            await renderer.setResource("en", "long_desc", "Total amount of ETH raised so far."),
            await renderer.setResource("ko", "my_balance", "모금 금액"),
            await renderer.setResource("ko", "short_desc", "지금까지 모금된 총 ETH 금액."),
            await renderer.setResource("ko", "long_desc", "지금까지 모금된 총 ETH 금액."),
        ]);
    });
};
