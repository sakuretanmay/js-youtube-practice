function outer() {
  let name = "shaktiman";

  function inner() {
    let inner1var = "batman";
    console.log(name); // This logs the variable `name` from the outer function scope
  }

  function innerTwo() {
    // console.log(inner1var); //cannot access `inner1var` here outside inner function
  }

  inner();
  innerTwo();
  // console.log(inner1var);  //cannot access `inner1var` here outside inner function
}
outer();
