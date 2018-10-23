const setResource = require('./setResource');
const PurchasersWidgetRenderer = artifacts.require("PurchasersWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up PurchasersWidgetRenderer");
    try {
        let renderer = await PurchasersWidgetRenderer.deployed();
        await setResource(renderer, "en", "purchasers", "Purchasers");
        await setResource(renderer, "en", "short_desc", "A list of purchasers.");
        await setResource(renderer, "en", "long_desc", "This shows the list of purchasers participated in this sale.");
        await setResource(renderer, "en", "purchaser", "Purchaser");
        await setResource(renderer, "en", "eths_invested", "ETHs Invested");
        await setResource(renderer, "en", "tokens_purchased", "Tokens Purchased");
        await setResource(renderer, "ko", "purchasers", "구매자 목록");
        await setResource(renderer, "ko", "short_desc", "구매자 목록을 표시합니다.");
        await setResource(renderer, "ko", "long_desc", "이 세일에 참여한 전체 구매자 목록을 표시합니다.");
        await setResource(renderer, "ko", "purchaser", "구매자");
        await setResource(renderer, "ko", "eths_invested", "투자한 ETH");
        await setResource(renderer, "ko", "tokens_purchased", "구입한 토큰");

        callback();
    } catch (e) {
        callback(e);
    }
};
