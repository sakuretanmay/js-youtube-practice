function setUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("tim", "tim@g.com", "123535");
console.log(chai);

//Calls a method of an object, substituting another object for the current object.