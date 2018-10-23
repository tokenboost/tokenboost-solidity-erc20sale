const setResource = require('./setResource');
const ERC20SaleInputsRenderer = artifacts.require("ERC20SaleInputsRenderer");

module.exports = async (callback) => {
    console.log("Setting Up ERC20SaleInputsRenderer");
    try {
        let renderer = await ERC20SaleInputsRenderer.deployed();
        await Promise.all([
            await setResource(renderer, "en", "token_address", "Token Address"),
            await setResource(renderer, "en", "project_name", "Project Name (ex: Ethereum - Blockchain App Platform)"),
            await setResource(renderer, "en", "project_summary", "Project Summary"),
            await setResource(renderer, "en", "project_description", "Project Description"),
            await setResource(renderer, "en", "sale_name", "Round Name (ex: Private Sale, Presale, Public Sale)"),
            await setResource(renderer, "en", "logo_url", "Logo URL (256x256)"),
            await setResource(renderer, "en", "cover_image_url", "Cover Image URL"),
            await setResource(renderer, "en", "website_url", "Website URL"),
            await setResource(renderer, "en", "whitepaper_url", "Whitepaper URL"),
            await setResource(renderer, "en", "update", "Update"),
            await setResource(renderer, "en", "update_confirm", "Do you want to update?"),
            await setResource(renderer, "ko", "token_address", "토큰 주소"),
            await setResource(renderer, "ko", "project_name", "프로젝트 이름 (예: Ethereum - Blockchain App Platform)"),
            await setResource(renderer, "ko", "project_summary", "프로젝트 요약"),
            await setResource(renderer, "ko", "project_description", "프로젝트 설명"),
            await setResource(renderer, "ko", "sale_name", "라운드 이름 (ex: Private Sale, Presale, Public Sale)"),
            await setResource(renderer, "ko", "logo_url", "로고 URL (256x256)"),
            await setResource(renderer, "ko", "cover_image_url", "커버 이미지 URL"),
            await setResource(renderer, "ko", "website_url", "웹사이트 URL"),
            await setResource(renderer, "ko", "whitepaper_url", "백서 URL"),
            await setResource(renderer, "ko", "update", "업데이트"),
            await setResource(renderer, "ko", "update_confirm", "업데이트 하시겠습니까?"),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
