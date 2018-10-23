#!/bin/bash

#truffle exec scripts/setup_funds_raised_widget_renderer.js --network $1 &&
#truffle exec scripts/setup_sale_address_widget_renderer.js --network $1 &&
truffle exec scripts/setup_token_info_widget_renderer.js --network $1 &&
#truffle exec scripts/setup_withdraw_funds_widget_renderer.js --network $1 &&
#truffle exec scripts/setup_claim_refund_widget_renderer.js --network $1 &&
#truffle exec scripts/setup_erc20_sale_inputs_renderer.js --network $1 &&
truffle exec scripts/setup_my_investment_widget_renderer.js --network $1 &&
truffle exec scripts/setup_sale_status_widget_renderer.js --network $1 &&
truffle exec scripts/setup_purchase_widget_renderer.js --network $1
