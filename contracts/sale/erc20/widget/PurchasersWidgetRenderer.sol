pragma solidity ^0.4.24;

import "./ERC20SaleWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Localizable.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract PurchasersWidgetRenderer is ERC20SaleWidgetRenderer {
    using Widgets for Widgets.Widget;
    using UintUtils for uint;
    using AddressUtils for address;
    using strings for *;

    string public constant PURCHASERS = "purchasers";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";
    string public constant PURCHASER = "purchaser";
    string public constant ETHS_INVESTED = "eths_invested";
    string public constant TOKENS_PURCHASED = "tokens_purchased";

    function render(string _locale, ERC20Sale _sale) public view returns (string) {
        Elements.Element[] memory elements = new Elements.Element[](1);
        elements[0] = Elements.Element(
            true,
            PURCHASERS,
            "table",
            resources[_locale][PURCHASERS],
            "null",
            Actions.empty(),
            Tables.Table(true, _columns(_locale, _sale), _rows(_locale, _sale))
        );
        Widgets.Widget memory widget = Widgets.Widget(
            resources[_locale][PURCHASERS],
            resources[_locale][SHORT_DESC],
            resources[_locale][LONG_DESC],
            8,
            elements
        );
        return widget.toJson();
    }

    function _columns(string _locale, ERC20Sale _sale) private view returns (Tables.Column[]) {
        DetailedERC20 token = DetailedERC20(_sale.token());
        Tables.Column[] memory columns = new Tables.Column[](3);
        columns[0] = Tables.Column(
            true,
            PURCHASER,
            "address",
            resources[_locale][PURCHASER],
            Actions.empty()
        );
        columns[1] = Tables.Column(
            true,
            ETHS_INVESTED,
            "eth",
            resources[_locale][ETHS_INVESTED],
            Actions.empty()
        );
        columns[2] = Tables.Column(
            true,
            TOKENS_PURCHASED,
            "token".toSlice().concat(uint256(token.decimals()).toString().toSlice()),
            resources[_locale][TOKENS_PURCHASED],
            Actions.empty()
        );
        return columns;
    }

    function _rows(string _locale, ERC20Sale _sale) private view returns (string[]) {
        string[] memory rows = new string[](_sale.numberOfPurchasers());
        for (uint i = 0; i < rows.length; i++) {
            address purchaser = _sale.purchaserAt(i);
            string memory row = '{"purchaser":"';
            row = row.toSlice().concat(purchaser.toString().toSlice());
            row = row.toSlice().concat('","eths_invested":'.toSlice());
            row = row.toSlice().concat(_sale.paymentOf(purchaser).toString().toSlice());
            row = row.toSlice().concat(',"tokens_purchased":'.toSlice());
            row = row.toSlice().concat(_sale.tokenAmountOf(purchaser).toString().toSlice());
            row = row.toSlice().concat('}'.toSlice());
            rows[i] = row;
        }
        return rows;
    }
}
