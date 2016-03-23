console.clear();
/*
    basic loop
*/

for (var i = 0; i < 10; i++ ) {
    console.log(i);
}

var x = -1;

while (x++ < 5) {
    console.log(x);
}

// loop through array

var nums = [1,2,3,4];

for (var i = 0; i < nums.length ; i++) {
    console.log('value: ', nums[i]);
}

nums.forEach(function (n) {
    console.log('Array value: ', n);
});

// loop through object

var user = {
    name: "Amin",
    lastname: "Meyghani"
};


for (var key in user) {
    
}


