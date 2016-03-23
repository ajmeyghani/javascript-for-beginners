console.clear();
/*
    Function as a value of a key in an object
*/

var user = {
    name: "Amin",
    login: function () {
        console.log("I just logged in.")
    }
};

user.login();
