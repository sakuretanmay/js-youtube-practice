// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Promise 1
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

//Promise 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "hitesh", email: "email@email.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

//Promise 4
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123345" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//Promise 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javaScript", password: "345" });
    } else {
      reject("Error: js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const responce = await promiseFive;
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getUserData(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log('error:',error)
//     }
// }
// getUserData();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });