console.clear();

var x = {};

// key -> value
// like a dictionary.

// term -> definition
// key usually string.
// value can be anything.


var dictionary = {

    good: "to be desired or approved of.",
    fun: "enjoyment, amusement, or lighthearted pleasure."
};

// Nest objects, one iside the other.

var user = {
    name: "Amin",
    account: {
        id: 552,
        type: "checking",
        balance: 23234
    }
};

// access values: using dot notation.

console.log(dictionary.good);


console.log(user.account.type);

// functions as values (later....)


// Delete operator

console.log(user.name)
delete user.name;
console.log(user.name);


