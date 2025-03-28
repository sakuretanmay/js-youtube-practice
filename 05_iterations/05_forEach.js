const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //     console.log( "Value in array", val)
});

coding.forEach((item) => {
  // console.log( "each value in array", item)
});

function printMe(item) {
  // console.log("Printing the item:", item)
  
}

coding.forEach(printMe);

const myCoding = [
  {
    language: "JavaScript",
    filename: "js",
  },
  {
    language: "TypeScript",
    filename: "ts",
  },
  {
    language: "Java",
    filename: "java",
  },
];

myCoding.forEach((item) => {
  // console.log(item.language);
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});

console.log(values);
//.forEach() method does not return any value. Its purpose is to iterate over an array and execute a provided callback function for each element
