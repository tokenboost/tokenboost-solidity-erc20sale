pragma solidity ^0.4.24;

import "./ERC20SaleWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";
import "tokenboost-solidity/contracts/utils/StringUtils.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract TokenInfoWidgetRenderer is ERC20SaleWidgetRenderer {
    using Widgets for Widgets.Widget;
    using AddressUtils for address;
    using StringUtils for string;

    string public constant TOKEN_INFO = "token_info";
    string public constant TOKEN_ADDRESS = "token_address";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";

    function render(string _locale, ERC20Sale _sale) public view returns (string) {
        DetailedERC20 token = DetailedERC20(_sale.token());
        Elements.Element[] memory elements = new Elements.Element[](2);
        elements[0] = Elements.Element(
            true,
            TOKEN_INFO,
            "text",
            "ERC20",
            string(abi.encodePacked(token.name(), " (", token.symbol(), ")")).quoted(),
            Actions.empty(),
            Tables.empty()
        );
        elements[1] = Elements.Element(
            true,
            TOKEN_ADDRESS,
            "address",
            resources[_locale][TOKEN_ADDRESS],
            address(_sale.token()).toString().quoted(),
            Actions.empty(),
            Tables.empty()
        );
        Widgets.Widget memory widget = Widgets.Widget(
            resources[_locale][TOKEN_INFO],
            resources[_locale][SHORT_DESC],
            resources[_locale][LONG_DESC],
            4,
            elements
        );
        return widget.toJson();
    }
}
