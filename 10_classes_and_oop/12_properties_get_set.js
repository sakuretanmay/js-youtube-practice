function User(username, email) {
  this._username = username;
  this._email = email;

  Object.defineProperty(this, "email", {
    get() {
      return this._email.toUpperCase();
    },
    set(value) {
      this._email = value;
    },
  });
}

const newUser = new User("ravikishan", "ravikishan@bihar.com");
console.log(newUser.email);
