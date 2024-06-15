// let myName = "Rupali   "
// let mychannel = "chai      "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rupali = function(){
    console.log(`rupali is resent in all objects`);
}

Array.prototype.heyrupali = function(){
    console.log(`Rupali says hello`);
}

// heroPower.rupali()
myHeros.rupali()
myHeros.heyrupali()
// heroPower.heyrupali()

// inheritance 


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiaurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"rupali".trueLength()
"coffee".trueLength()