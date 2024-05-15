// singleton -->using constructor way(object.create)

// object literals 

const mySym = Symbol("key1")

const JsUser={
    name: "Rupali",
    "full name": "Rupali R",
    [mySym]: "mykey1",
    age: 19,         
    location: "Bangalore",
    email: "rupali@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rupali67@chat.com"
// Object.freeze(JsUser)
JsUser.email = "brghksu@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());