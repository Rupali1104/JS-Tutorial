// based on how data is stored in memory and data is accessed from memory , datatypes are classified into 2 types Primitive and non primitive

// Primitive [7]

// String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 3487765375663734563428753n


// Reference type(Non-Primitive)

// Array, Objects, Functions

// javascript is a dynamically typed language

const fruits = ["apple", "mango", "orange"]; //array

let myObj = {
    name: "Rupali",
    age: 19,
} // Object

const myFunction = function(){
    console.log("Hello World");
}

// how to find datatype

console.log(typeof bigNumber); //bigInt
console.log(typeof outsideTemp); //object

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object