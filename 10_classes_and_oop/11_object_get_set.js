const User = {
  _username: "tanmaySakure",
  _email: "tanmay@google.com",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// const newUser = Object.create(User);
console.log(User.email);
