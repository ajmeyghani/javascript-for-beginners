/*
    functions and arrays.
*/
console.clear();

var numbers = [1,5,19,0];


numbers.forEach(function (n) {
    console.log(n);
});


var mapped = numbers.map(function (n) { return n + 1; });
var lessThan5 = numbers.filter(function (n) { return n < 5; });
var sum = numbers.reduce(function (c, n) { return c + n; });

numbers.sort(function (a,b) {
    return a < b ? -1 : a > b ? 1 : 0;
});

