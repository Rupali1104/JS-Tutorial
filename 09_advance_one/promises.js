// promise 1
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// promise 2 (same thing but code is written together)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// resolve is directly linked to then 

// promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@chaiaurcode.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})
// the object is passed and consumed in .then

// promise 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Rupali", passsword: "123"})
        } else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> {
    console.log("The Promise is either resolved or either rejected");
})

// resolve= then
// reject= catch
// finally os executed at either of both cases

// promise 5
const promiseFive = new Promise(function(reject, resolve){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"javascript", passsword: "123"})
        } else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});

async function consumePromiseFive (){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   } 
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))