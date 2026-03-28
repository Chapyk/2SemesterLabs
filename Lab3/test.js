import memoize from './memoize.js';

const slowSum = (a, b) => {
    console.log("calculating...");
    return a + b;
};

const memoSum = memoize(slowSum, 2);

console.log(memoSum(1, 2)); 
console.log(memoSum(1, 2)); 

console.log(memoSum(2, 3));
console.log(memoSum(3, 4));

console.log(memoSum(1, 2));