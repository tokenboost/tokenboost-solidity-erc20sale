pragma solidity ^0.4.24;

import "tokenboost-solidity/contracts/sale/Sale.sol";
import "tokenboost-solidity/contracts/utils/strings.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../../strategy/sale/erc20/ERC20SaleStrategy.sol";

contract ERC20Sale is Sale {
    using SafeMath for uint256;
    using strings for *;

    /**
     * @notice this.owner.selector ^ this.renounceOwnership.selector ^ this.transferOwnership.selector
        ^ this.template.selector ^ this.activate.selector
        ^ this.projectName.selector ^ this.projectSummary.selector ^ this.projectDescription.selector
        ^ this.logoUrl.selector ^ this.coverImageUrl.selector ^ this.websiteUrl.selector ^ this.whitepaperUrl.selector
        ^ this.name.selector ^ this.weiRaised.selector ^ this.withdrawn.selector
        ^ this.started.selector ^ this.successful.selector ^ this.finished.selector ^ this.paymentOf.selector
        ^ bytes4(keccak256("update(string,string,string,string,string,string,string,string)"))
        ^ bytes4(keccak256("update(string,string,string,string,string,string,string,string,address)"))
        ^ this.addStrategy.selector ^ this.numberOfStrategies.selector ^ this.strategyAt.selector
        ^ this.numberOfActivatedStrategies.selector ^ this.activatedStrategyAt.selector ^ this.withdraw.selector
        ^ this.claimRefund.selector ^ this.purchasable.selector ^ this.getTokenAmount.selector
     */
    bytes4 public constant InterfaceId_ERC20Sale = 0x5f57e789;

    event TokenPurchase(
        address indexed purchaser,
        uint256 weiAmount,
        uint256 tokenAmount
    );

    ERC20 public token;

    constructor(
        address _owner,
        string _projectName,
        string _name,
        ERC20 _token
    ) public Sale(_owner, _projectName, _name) {
        require(_token != address(0));

        token = _token;

        _registerInterface(InterfaceId_ERC20Sale);
    }

    function update(
        string _projectName,
        string _projectSummary,
        string _projectDescription,
        string _logoUrl,
        string _coverImageUrl,
        string _websiteUrl,
        string _whitepaperUrl,
        string _name,
        ERC20 _token
    ) public {
        super.update(
            _projectName,
            _projectSummary,
            _projectDescription,
            _logoUrl,
            _coverImageUrl,
            _websiteUrl,
            _whitepaperUrl,
            _name
        );
        token = _token;
    }

    function() whenActivated external payable {
        require(!finished());
        require(started());
        require(purchasable(msg.value));

        increasePaymentOf(msg.sender, msg.value);

        uint256 tokenAmount = getTokenAmount(msg.value);
        address tokenReceiver = _tokenReceiver(msg.sender, tokenAmount);
        require(_supplyTokens(tokenReceiver, tokenAmount));

        emit TokenPurchase(msg.sender, msg.value, tokenAmount);
    }

    function purchasable(uint256 _weiAmount) public view returns (bool) {
        bool p = false;
        for (uint i = 0; i < activatedStrategies.length; i++) {
            ERC20SaleStrategy strategy = ERC20SaleStrategy(activatedStrategies[i]);
            p = p || strategy.purchasable(msg.sender, _weiAmount);
        }
        return p;
    }

    function getTokenAmount(uint256 _weiAmount) public view returns (uint256) {
        for (uint i = 0; i < activatedStrategies.length; i++) {
            ERC20SaleStrategy strategy = ERC20SaleStrategy(activatedStrategies[i]);
            uint256 rate = strategy.tokenRate(msg.sender, _weiAmount);
            if (rate > 0) {
                return _weiAmount.mul(rate);
            }
        }
        return 0;
    }

    function _tokenReceiver(address _purchaser, uint256 _tokenAmount) private returns (address) {
        for (uint i = 0; i < activatedStrategies.length; i++) {
            ERC20SaleStrategy strategy = ERC20SaleStrategy(activatedStrategies[i]);
            if (strategy.receivesTokens(_purchaser, _tokenAmount)) {
                return address(strategy);
            }
        }
        return _purchaser;
    }

    function _supplyTokens(address _to, uint256 _tokenAmount) private returns (bool) {
        for (uint i = 0; i < activatedStrategies.length; i++) {
            ERC20SaleStrategy strategy = ERC20SaleStrategy(activatedStrategies[i]);
            if (strategy.supplyTokens(_to, _tokenAmount)) {
                return true;
            }
        }
        return false;
    }
}
