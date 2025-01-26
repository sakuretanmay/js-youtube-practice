//+++++++++++ Object literal +++++++++++++++++++++++++++++++
const user = {
    username: "john",
    password: "John@123",
    isLoggedin: true,

    getUserdetails : function(){
        // console.log("Got user details")
        // console.log(this)
        console.log(this.username);
    }
}
// console.log(user.getUserdetails())
// console.log(this)

//+++++++++++ Constructor Function +++++++++++++++++++++++++++++++

function User(username, password, isLoggedin){
    this.username = username,
    this.password = password,
    this.isLoggedin= isLoggedin

    //  return this;
    // 'this' is implicitly returned, so no need for explicit return.
}

const userOne = new User("Tom", "tom@123", true);
const userTwo = new User("Tim", "tim@433", false);

// console.log(userOne);
// console.log(userTwo);

//When you use the new keyword, it triggers the following steps:
//1. A new empty object is created.
//2. The prototype of the new object is set to the constructor's prototype.
//3. `this` is bound to the newly created object inside the constructor.
//4. The constructor function is called, initializing properties on `this`.
//5. The newly created object is returned (or the object explicitly returned).
