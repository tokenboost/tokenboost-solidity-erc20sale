const TokenInfoWidgetRenderer = artifacts.require("TokenInfoWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up TokenInfoWidgetRenderer");
    try {
        let renderer = await TokenInfoWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "token_info", "Token Info"),
            await renderer.setResource("en", "token_standard", "Token Standard"),
            await renderer.setResource("en", "token_name", "Token Name"),
            await renderer.setResource("en", "token_symbol", "Token Symbol"),
            await renderer.setResource("en", "token_address", "Token Address"),
            await renderer.setResource("en", "short_desc", "Detailed information of the token to sell."),
            await renderer.setResource("en", "long_desc", "Detailed information of the token to sell."),
            await renderer.setResource("ko", "token_info", "토큰 정보"),
            await renderer.setResource("ko", "token_standard", "토큰 표준"),
            await renderer.setResource("ko", "token_name", "토큰 이름"),
            await renderer.setResource("ko", "token_symbol", "토큰 심볼"),
            await renderer.setResource("ko", "token_address", "토큰 주소"),
            await renderer.setResource("ko", "short_desc", "토큰의 정보를 나타냅니다."),
            await renderer.setResource("ko", "long_desc", "토큰의 정보를 나타냅니다."),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
