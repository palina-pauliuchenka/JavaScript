const TAX_RATE = 2;
const SHIPPING_DEFAULT = 0;

function calculateTotal(items, {shipping = SHIPPING_DEFAULT, discount = 0} = {}) {
    if (!items) return 0;

    const ITEM_COST = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    const DISCOUNT_RATE = 1 - discount;

    return ITEM_COST * DISCOUNT_RATE * TAX_RATE + shipping;
}

const  TEST_ITEMS = [
    {
        price: 15,
        quantity: 2,
    },
    {
        price: 5,
        quantity: 5,
    },
    {
        price: 5,
        quantity: 0,
    },
];

console.log(calculateTotal()); //0
console.log(calculateTotal(TEST_ITEMS)); //55
console.log(calculateTotal(TEST_ITEMS, {})); //55

console.log(calculateTotal(undefined, {})); //0
console.log(calculateTotal([], {})); //0
console.log(calculateTotal(TEST_ITEMS, {})); //55
console.log(calculateTotal(TEST_ITEMS, {shipping: 3, discount: .7})); //19.500000000000004
console.log(calculateTotal(TEST_ITEMS, {discount: .5})); //27.5
console.log(calculateTotal(TEST_ITEMS, {shipping: 12})); //67