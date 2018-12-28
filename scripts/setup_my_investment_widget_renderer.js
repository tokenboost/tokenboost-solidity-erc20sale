const setResource = require('./setResource');
const MyInvestmentWidgetRenderer = artifacts.require("MyInvestmentWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up MyInvestmentWidgetRenderer");
    try {
        let renderer = await MyInvestmentWidgetRenderer.deployed();
        await setResource(renderer, "en", "my_investment", "My Investment");
        await setResource(renderer, "en", "short_desc", "Total amount of ETH you invested.");
        await setResource(renderer, "en", "long_desc", "Total amount of ETH you invested.");
        await setResource(renderer, "en", "eths_invested", "ETHs Invested");
        await setResource(renderer, "en", "tokens_bought", "Tokens Bought");
        await setResource(renderer, "ko", "my_investment", "나의 투자");
        await setResource(renderer, "ko", "short_desc", "투자한 총 ETH 금액.");
        await setResource(renderer, "ko", "long_desc", "투자한 총 ETH 금액.");
        await setResource(renderer, "ko", "eths_invested", "투자한 ETH");
        await setResource(renderer, "ko", "tokens_bought", "구입한 토큰");

        callback();
    } catch (e) {
        callback(e);
    }
};
