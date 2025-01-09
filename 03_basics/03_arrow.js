// ++++++++++++++++++ this keyword ++++++++++
const user = {
    username : "Ram",
    email: "ram@github.com",

    welcomeMessage: function (){
        console.log(`Hi ${this.username}, welcome to this website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Hari";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// ++++++++++++++++++ arrow function ++++++++++

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;
// OR
// const addTwo = (num1, num2) => (num1 + num2);

console.log( addTwo( 2,6));