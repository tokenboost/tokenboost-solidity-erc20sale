const setResource = require('./setResource');
const ClaimRefundWidgetRenderer = artifacts.require("ClaimRefundWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up ClaimRefundWidgetRenderer");
    try {
        let renderer = await ClaimRefundWidgetRenderer.deployed();
        await Promise.all([
            await setResource(renderer, "en", "claim_refund", "Claim Refund"),
            await setResource(renderer, "en", "short_desc", "You can claim refund of your investment."),
            await setResource(renderer, "en", "long_desc", "You can claim refund because the sale has failed. Fund will be returned to your address."),
            await setResource(renderer, "en", "claim_refund_confirm", "Do you want to claim refund?"),
            await setResource(renderer, "ko", "claim_refund", "환불 요청"),
            await setResource(renderer, "ko", "short_desc", "투자금에 대해 환불을 요청할 수 있습니다."),
            await setResource(renderer, "ko", "long_desc", "세일이 실패했기 때문에 환불 요청을 할 수 있습니다. 자금이 내 계좌로 전송됩니다."),
            await setResource(renderer, "ko", "claim_refund_confirm", "환불 요청하시겠습니까?"),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
