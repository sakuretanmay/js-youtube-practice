class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createID(){
        return `a0xr${this.username}z8wn`
    }
}

const newUser = new User("jassibhai");
newUser.logMe();
// console.log(newUser.createID());

/*The static keyword in JavaScript is used to define methods or properties that belong to the class itself, rather than to instances of the class. These static methods or properties are shared across all instances of the class and cannot be called on an instance. They are called directly on the class. */

console.log(User.createID(newUser.username)); // Accessing static method via the class