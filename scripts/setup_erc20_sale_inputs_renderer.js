const ERC20SaleInputsRenderer = artifacts.require("ERC20SaleInputsRenderer");

module.exports = async (callback) => {
    try {
        let renderer = await ERC20SaleInputsRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "token_address", "Token Address"),
            await renderer.setResource("en", "project_name", "Project Name (ex: Ethereum - Blockchain App Platform)"),
            await renderer.setResource("en", "project_summary", "Project Summary"),
            await renderer.setResource("en", "project_description", "Project Description"),
            await renderer.setResource("en", "sale_name", "Round Name (ex: Private Sale, Presale, Public Sale)"),
            await renderer.setResource("en", "logo_url", "Logo URL (256x256)"),
            await renderer.setResource("en", "cover_image_url", "Cover Image URL"),
            await renderer.setResource("en", "webiste_url", "Website URL"),
            await renderer.setResource("en", "update", "Update"),
            await renderer.setResource("en", "update", "Do you want to update?"),
            await renderer.setResource("ko", "token_address", "토큰 주소"),
            await renderer.setResource("ko", "project_name", "프로젝트 이름 (예: Ethereum - Blockchain App Platform)"),
            await renderer.setResource("ko", "project_summary", "프로젝트 요약"),
            await renderer.setResource("ko", "project_description", "프로젝트 설명"),
            await renderer.setResource("ko", "sale_name", "라운드 이름 (ex: Private Sale, Presale, Public Sale)"),
            await renderer.setResource("ko", "logo_url", "로고 URL (256x256)"),
            await renderer.setResource("ko", "cover_image_url", "커버 이미지 URL"),
            await renderer.setResource("ko", "webiste_url", "웹사이트 URL"),
            await renderer.setResource("ko", "update", "업데이트"),
            await renderer.setResource("ko", "update", "업데이트 하시겠습니까?"),
        ]);

        callback();
    } catch (e) {
        callback(e);
    }
};
