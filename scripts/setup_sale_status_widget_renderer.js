const setResource = require('./setResource');
const SaleStatusWidgetRenderer = artifacts.require("SaleStatusWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up SaleStatusWidgetRenderer");
    try {
        let renderer = await SaleStatusWidgetRenderer.deployed();
        await Promise.all([
            await setResource(renderer, "en", "sale_status", "Sale Status"),
            await setResource(renderer, "en", "short_desc", "Sale status is one of 'activated', 'started', 'successful' and 'finished'."),
            await setResource(renderer, "en", "long_desc", "Sale status is one of 'activated', 'started', 'successful' and 'finished'."),
            await setResource(renderer, "en", "activated", "Activated"),
            await setResource(renderer, "en", "activated_desc", "This sale hasn't been started yet."),
            await setResource(renderer, "en", "started", "Started"),
            await setResource(renderer, "en", "started_desc", "The token sale has started."),
            await setResource(renderer, "en", "successful", "Successful"),
            await setResource(renderer, "en", "successful_desc", "This sale continues until finished."),
            await setResource(renderer, "en", "finished", "Finished"),
            await setResource(renderer, "en", "finished_desc", "This sale has finished."),
            await setResource(renderer, "ko", "sale_status", "세일 상태"),
            await setResource(renderer, "ko", "short_desc", "세일 상태는 '활성화됨', '시작됨', '성공', '종료' 중 하나입니다."),
            await setResource(renderer, "ko", "long_desc", "세일 상태는 '활성화됨', '시작됨', '성공', '종료' 중 하나입니다."),
            await setResource(renderer, "ko", "activated", "활성화됨"),
            await setResource(renderer, "ko", "activated_desc", "아직 세일이 시작되지 않았습니다."),
            await setResource(renderer, "ko", "started", "시작됨"),
            await setResource(renderer, "ko", "started_desc", "토큰 판매가 시작되었습니다."),
            await setResource(renderer, "ko", "successful", "성공"),
            await setResource(renderer, "ko", "successful_desc", "세일이 종료될 때까지 토큰 판매는 계속됩니다."),
            await setResource(renderer, "ko", "finished", "종료"),
            await setResource(renderer, "ko", "finished_desc", "세일이 종료되었습니다.")
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
