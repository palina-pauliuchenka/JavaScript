function howManySeconds(hours) {
    return hours * 3600;
}

// const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

console.log(howManySeconds(2)); // 7200
console.log(howManySeconds(10)); // 36000
console.log(howManySeconds(24)); //86400