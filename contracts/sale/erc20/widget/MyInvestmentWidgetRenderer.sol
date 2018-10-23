pragma solidity ^0.4.24;

import "./ERC20SaleWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";

contract MyInvestmentWidgetRenderer is ERC20SaleWidgetRenderer {
    using Widgets for Widgets.Widget;
    using UintUtils for uint;

    string public constant MY_INVESTMENT = "my_investment";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";
    string public constant ETHS_INVESTED = "eths_invested";

    function render(string _locale, ERC20Sale _sale) public view returns (string) {
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
