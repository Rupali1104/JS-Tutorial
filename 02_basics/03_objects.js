// singleton -->using constructor way(object.create)

// object literals 

const mySym = Symbol("key1")

const JsUser={
    name: "Rupali",
    "full name": "Rupali R",
    [mySym]: "mykey1"
    age:19,
    location: "Bangalore",
    email: "rupali@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

