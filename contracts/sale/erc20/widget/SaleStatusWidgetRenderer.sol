pragma solidity ^0.4.24;

import "./ERC20SaleWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";
import "tokenboost-solidity/contracts/utils/StringUtils.sol";

contract SaleStatusWidgetRenderer is ERC20SaleWidgetRenderer {
    using Widgets for Widgets.Widget;
    using StringUtils for string;

    string public constant SALE_STATUS = "sale_status";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";
    string public constant ACTIVATED = "activated";
    string public constant ACTIVATED_DESC = "activated_desc";
    string public constant STARTED = "started";
    string public constant STARTED_DESC = "started_desc";
    string public constant SUCCESSFUL = "successful";
    string public constant SUCCESSFUL_DESC = "successful_desc";
    string public constant FINISHED = "finished";
    string public constant FINISHED_DESC = "finished_desc";

    function render(string _locale, ERC20Sale _sale) public view returns (string) {
        if (_sale.activated()) {
            string memory status;
            string memory desc;
            if (_sale.finished()) {
                status = resources[_locale][FINISHED];
                desc = resources[_locale][FINISHED_DESC];
            } else if (_sale.successful()) {
                status = resources[_locale][SUCCESSFUL];
                desc = resources[_locale][SUCCESSFUL_DESC];
            } else if (_sale.started()) {
                status = resources[_locale][STARTED];
                desc = resources[_locale][STARTED_DESC];
            } else {
                status = resources[_locale][ACTIVATED];
                desc = resources[_locale][ACTIVATED_DESC];
            }
            Elements.Element[] memory elements = new Elements.Element[](1);
            elements[0] = Elements.Element(
                true,
                SALE_STATUS,
                "text",
                status,
                desc.quoted(),
                Actions.empty(),
                Tables.empty()
            );
            Widgets.Widget memory widget = Widgets.Widget(
                resources[_locale][SALE_STATUS],
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
