function findLargestNum(arr) {
    return Math.max.apply(null, arr);
}

console.log(findLargestNum([1, 2, 34, 3]));