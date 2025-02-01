class User {
  constructor(username, email) {
    (this.username = username), (this.email = email);
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(value) {
    this._username = value;
  }
}

const timDavid = new User("tim", "tim@coffe.com");

console.log(timDavid.username);
