class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}xyz`;
  }

  uppercaseUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("rohit", "sharma@1234", "rs45");

console.log(userOne.encryptPassword());
console.log(userOne.uppercaseUsername());


//behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// };

// User.prototype.encryptPassword = function (){
//     return `${this.password}xyz`;
// }

// User.prototype.uppercaseUsername = function(){
//     return `${this.username.toUpperCase()}`;

// }

// const userTwo = new User("rohit", "sharma@1234", "rs45");

// console.log(userTwo.encryptPassword());
// console.log(userTwo.uppercaseUsername());