// classes using static property
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Rupali = new User("Rupali")

// console.log(Rupali.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "I@phone.com")

// iphone.logMe();
console.log(iphone.createId());