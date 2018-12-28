pragma solidity ^0.4.24;

import "./ERC20SaleWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract MyInvestmentWidgetRenderer is ERC20SaleWidgetRenderer {
    using Widgets for Widgets.Widget;
    using UintUtils for uint;

    string public constant MY_INVESTMENT = "my_investment";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";
    string public constant ETHS_INVESTED = "eths_invested";
    string public constant TOKENS_BOUGHT = "tokens_bought";

    function render(string _locale, ERC20Sale _sale) public view returns (string) {
        DetailedERC20 token = DetailedERC20(_sale.token());
        uint256 payment = _sale.paymentOf(tx.origin);
        if (payment > 0) {
            Elements.Element[] memory elements = new Elements.Element[](2);
            elements[0] = Elements.Element(
                true,
                ETHS_INVESTED,
                "eth",
                resources[_locale][ETHS_INVESTED],
                payment.toString(),
                Actions.empty(),
                Tables.empty()
            );
            elements[1] = Elements.Element(
                true,
                TOKENS_BOUGHT,
                string(abi.encodePacked("token", uint256(token.decimals()).toString())),
                resources[_locale][TOKENS_BOUGHT],
                _sale.tokenAmountOf(tx.origin).toString(),
                Actions.empty(),
                Tables.empty()
            );
            Widgets.Widget memory widget = Widgets.Widget(
                resources[_locale][MY_INVESTMENT],
                resources[_locale][SHORT_DESC],
                resources[_locale][LONG_DESC],
                4,
                elements
            );
            return widget.toJson();
        } else {
            return "";
        }
    }
}
