const WithdrawFundsWidgetRenderer = artifacts.require("WithdrawFundsWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up WithdrawFundsWidgetRenderer");
    try {
        let renderer = await WithdrawFundsWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "withdraw_funds", "Withdraw Funds"),
            await renderer.setResource("en", "short_desc", "You can withdraw funds raised from successful sale."),
            await renderer.setResource("en", "long_desc", "You can withdraw funds because the sale was successful. All the funds will be sent to your address."),
            await renderer.setResource("en", "withdraw", "Withdraw"),
            await renderer.setResource("en", "withdraw_confirm", "Do you want to withdraw?"),
            await renderer.setResource("ko", "withdraw_funds", "자금 출금"),
            await renderer.setResource("ko", "short_desc", "성공한 세일로부터 모금된 자금을 출금할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "세일이 성공했기 때문에 자금을 출금할 수 있습니다. 모든 자금이 내 계좌로 전송됩니다."),
            await renderer.setResource("ko", "withdraw", "출금하기"),
            await renderer.setResource("ko", "withdraw_confirm", "출금하시겠습니까?"),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
