// function addTwoNums(num1, num2){
//     console.log(num1+ num2);
// }

function addTwoNums(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

// console.log(addTwoNums(2,4));

function loginUserMsg(username ="sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg());


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300, 500, 800));

const user ={
    username :"hitesh",
    price: 399
}

function handleObject( anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username :"Rahul",
    price: 499
})

const newArray =[100, 300, 400, 600];

function returnSecondValue( anyArray){
    return anyArray[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100, 500, 400, 600]));