const setResource = require('./setResource');
const FundsRaisedWidgetRenderer = artifacts.require("FundsRaisedWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up FundsRaisedWidgetRenderer");
    try {
        let renderer = await FundsRaisedWidgetRenderer.deployed();
        await Promise.all([
            await setResource(renderer, "en", "funds_raised", "Funds Raised"),
            await setResource(renderer, "en", "short_desc", "Total amount of ETH raised so far."),
            await setResource(renderer, "en", "long_desc", "Total amount of ETH raised so far."),
            await setResource(renderer, "ko", "funds_raised", "모금 금액"),
            await setResource(renderer, "ko", "short_desc", "지금까지 모금된 총 ETH 금액."),
            await setResource(renderer, "ko", "long_desc", "지금까지 모금된 총 ETH 금액."),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
