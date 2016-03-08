console.clear();
/*

Elusive this: different depending on the context.

*/

var x = this;

console.log(x);

var user = {
    login: function () {
        console.log(this);
    }
};

user.login();

// See how a function is called (invoked)
// invokation area

// binding rules
// 1. called with new: this -> object
// 2. implicit -> object.fn()
// 3. explicit -> fn.call({}, 1), fn.apply({}, [1,2]);


// Maximum
Math.max(1,2,3);

// change context

var m = Math.max.apply(null, [1,5,10,2]);
console.log('Max is: ', m);


