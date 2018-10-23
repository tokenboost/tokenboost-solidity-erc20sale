const setResource = require('./setResource');
const SaleAddressWidgetRenderer = artifacts.require("SaleAddressWidgetRenderer");

module.exports = async (callback) => {
    console.log("Setting Up SaleAddressWidgetRenderer");
    try {
        let renderer = await SaleAddressWidgetRenderer.deployed();
        await setResource(renderer, "en", "sale_address", "Sale Address");
        await setResource(renderer, "en", "short_desc", "The address of the sale's contract.");
        await setResource(renderer, "en", "long_desc", "Every sale has its own contract.");
        await setResource(renderer, "ko", "sale_address", "세일 주소");
        await setResource(renderer, "ko", "short_desc", "세일의 계약 주소를 표시합니다.");
        await setResource(renderer, "ko", "long_desc", "모든 세일은 고유의 계약을 가지고 있습니다.");

        callback();
    } catch (e) {
        callback(e);
    }
};
