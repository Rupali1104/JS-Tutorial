const name = "Rupali"
const repoCount = 2

// console.log(name + repoCount + " Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rupali-r-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "    rupali    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rupali.com/rupali%20rwytfwj"

console.log(url.replace('%20','-'));

console.log(url.includes('rupali'));
console.log(url.includes('tyewhgg'));

console.log(gameName.split('-'));