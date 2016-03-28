var x = 2;
var y = {name: 'Amin'};
var w = y;
console.log(w === y); // true
console.log(y.name === w.name); // true

y.name = 'Tom';
console.log(w.name); // 'Tom'
