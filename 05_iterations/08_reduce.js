const numbers = [ 1, 2, 3, 4];

// only for understanding
// const total = numbers.reduce( function(accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0)

const total = numbers.reduce( (acc, curr) => ( acc + curr ), 0);
console.log(total);


const shoppingCart = [
    {
        course : "js course",
        price : 999
    },
    {
        course : "java course",
        price : 2999
    },
    {
        course : "py course",
        price : 1999
    },
    {
        course : "AI course",
        price : 5999
    },
    {
        course : "android dev course",
        price : 3999
    },
    {
        course : "dsa course",
        price : 4999
    }
]

const cartTotal = shoppingCart.reduce((acc, item)=> acc + item.price, 0);

console.log(cartTotal);