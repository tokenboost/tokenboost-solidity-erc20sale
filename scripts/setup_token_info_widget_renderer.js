const setResource = require('./setResource');
const TokenInfoWidgetRenderer = artifacts.require("TokenInfoWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up TokenInfoWidgetRenderer");
    try {
        let renderer = await TokenInfoWidgetRenderer.deployed();
        await Promise.all([
            await setResource(renderer, "en", "token_info", "Token Info"),
            await setResource(renderer, "en", "token_address", "Token Address"),
            await setResource(renderer, "en", "short_desc", "Detailed information of the token to sell."),
            await setResource(renderer, "en", "long_desc", "Detailed information of the token to sell."),
            await setResource(renderer, "ko", "token_info", "토큰 정보"),
            await setResource(renderer, "ko", "token_address", "토큰 주소"),
            await setResource(renderer, "ko", "short_desc", "토큰의 정보를 나타냅니다."),
            await setResource(renderer, "ko", "long_desc", "토큰의 정보를 나타냅니다."),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
