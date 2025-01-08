let a = 100;
const b= 200;
// var c = 30;

if(true){
    let a = 10;
    const b = 20;
    console.log("inner a & b:", a , b);
}

console.log("outer a & b :", a, b);
// console.log(c);

function one(){
    const username ="sam";

    function two(){
        const website =" Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting scenario ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}