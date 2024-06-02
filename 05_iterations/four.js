// for in loop iterable for objects now

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
     
}

// iterable for arrays as well
const programming = ["js", "rb","py", "java", "cpp" ]

for (const key in programming) {
    // console.log(programming[key]);
}

// maps


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);

// }

// not iterable for maps in for in loop