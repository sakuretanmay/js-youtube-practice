class User{
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){

        super(username)
        /* The super keyword in js is used in classes to call and access functions on an object's parent. It plays a key role in inheritance when extending a class and allows derived classes to access methods or constructors of their parent class. */
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`)
    }
}

const chai = new User("Chai");
chai.logMe();
// chai.addCourse();

const masalaChai = new Teacher("masalaChai", "masalaChai@gmai.com", "masala1234");
masalaChai.addCourse()
masalaChai.logMe()