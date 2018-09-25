const TAX_RATE = 0.06;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 5.99;
const SPENDING_LIMIT = 300;
var account_balance = 1000;
var pre_tax = 0;
var final_amt = 0;

function calculate_tax(price) {
  return final_amt = pre_tax + (pre_tax * TAX_RATE);
}

function format_price(price) {
  return "$" + final_amt.toFixed(2);
}

while (pre_tax < account_balance) {
  pre_tax = pre_tax + PHONE_PRICE;

  if (pre_tax < SPENDING_LIMIT) {
    pre_tax = pre_tax + ACCESSORY_PRICE;
  }
}

final_amt = calculate_tax(pre_tax);

console.log("Your total is " + format_price(final_amt));

if (final_amt > account_balance) {
  console.log("Do not make this purchase - your account will be overdrawn.");
}

