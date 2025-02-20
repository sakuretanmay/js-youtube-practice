const accountId = 1234;
let accountEmail = "google@google.com";
var accountPassword = "134124";
accountCity = "jaipur";

let accountState;

// Prefer not to use var
// Bcoz of issue in block scoop and functional scoop

accountEmail = "yt@google.com";
accountPassword = "313131";
accountCity = "Goa";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
