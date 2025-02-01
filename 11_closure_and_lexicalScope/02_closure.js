/* When you return a function from another function in JavaScript, 
   not only the function itself is returned, but also its lexical scope is 
   captured and preserved (returned). This concept is known as closures. */

function outer() {
  let name = "honeysingh";

  function inner() {
    console.log(name);
  }
  return inner;
}

const myfunc = outer();
myfunc();
