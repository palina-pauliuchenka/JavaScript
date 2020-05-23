# Calculate Total
Calculates total amount of item's price, quantity, shipping and tax.

```js
const TAX_RATE = 1;
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
```

# Find the Largest Number in an Array
Create a function that takes an array of numbers. Return the largest number in the array.
### Examples
- findLargestNum([4, 5, 1, 3]) ➞ 5
- findLargestNum([300, 200, 600, 150]) ➞ 600
- findLargestNum([1000, 1001, 857, 1]) ➞ 1001
### Notes
- Expect either a positive number or zero (there are no negative numbers).
- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
## Solution
```js
function findLargestNum(arr) {
    return Math.max.apply(null, arr);
}

console.log(findLargestNum([1, 2, 34, 3])); //34
```
# Football Points
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team as obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
### Examples
- footballPoints(3, 4, 2) ➞ 13

- footballPoints(5, 0, 2) ➞ 15

- footballPoints(0, 0, 1) ➞ 0
### Notes
Inputs will be numbers greater than or equal to 0.

## Solution
On default one win equals 3 points, one draw equals 1 point, and one loss equals 0 points
```js
let defaultWin = 3,
    defaultDraw = 1,
    defaultLoss = 0;

function footballPoints(wins, draws, losses) {
    return defaultWin * wins + defaultDraw * draws + defaultLoss * losses;
}

console.log(footballPoints(3, 4, 2)); // 13
console.log(footballPoints(5, 0, 2)); // 15
console.log(footballPoints(0, 0, 1)); // 0
```
**Easier way:**

Because of the math, every time we multiply by 0, we get 0, and every time we multiply a number by 1, we get the same number. So that I can shorter my code without **losses** and just add **draws**.
```js
function footballPoints(wins, draws, losses) {
    return wins * 3 +  draws;
}
```
# Find the Bug: Checking Even Numbers
Create a function that takes in an array and returns true if all its values are even, and false otherwise.

Not a big deal, your friend says. He writes the following code:
```js
function checkAllEven(arr) {
  return arr.every(x % 2 === 0)
}
```
The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
### Examples
- checkAllEven([1, 2, 3, 4]) ➞ false
- checkAllEven([2, 4, 6]) ➞ true
- checkAllEven([5, 6, 8, 10]) ➞ false
- checkAllEven([-2, 2, -2, 2]) ➞ true
### Notes
For help, check Resources or ask a question in the Comments.
## Solution
```js
function checkAllEven(array) {
     return array.every(x => x % 2 === 0);
}


console.log(checkAllEven([2, 4, 6])); //true
```
# Convert Hours into Seconds
Write a function that converts hours into seconds.
### Examples
- howManySeconds(2) ➞ 7200
- howManySeconds(10) ➞ 36000
- howManySeconds(24) ➞ 86400
### Notes
- 60 seconds in a minute, 60 minutes in an hour
- Don't forget to return your answer.
## Solution
```js
function howManySeconds(hours) {
    return hours * 3600;
}

console.log(howManySeconds(2)); // 7200
console.log(howManySeconds(10)); // 36000
console.log(howManySeconds(24)); //86400
```
# Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
### Examples
- nextEdge(8, 10) ➞ 17
- nextEdge(5, 7) ➞ 11
- nextEdge(9, 2) ➞ 10
### Notes
- (side1 + side2) - 1 = maximum range of third edge.
- The side lengths of the triangle are positive integers.
- Don't forget to return the result.

## Solution
```js
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

console.log(nextEdge(8, 10)); // 17
console.log(nextEdge(5, 7)); //11
console.log(nextEdge(9, 2)); //10
```

