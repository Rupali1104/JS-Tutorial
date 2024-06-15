const user = {
    username: "Rupali",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// new keyword here is constructor function and it gives new instances
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // not necessary implicitly already defined
}

const userOne = new User("Rupali", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

// as soon as u use new keyword
// new object is being created
// constructor function is being called here
// this keyword is being injected
// then we'll get it in the function