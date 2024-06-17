// getter setter using classes -  mostly used 

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rupali`
    }

    set password(value){
        this._password = value
    }
}

const Rupali = new User("rupali@gmail.com", "abc")
console.log(Rupali.email);