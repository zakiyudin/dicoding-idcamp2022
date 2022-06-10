const myArray = ["a", "b", "c"];
const yourArray = ["d", "e", "f"];

const ourArray = [...myArray, ...yourArray];

console.log(...ourArray);


// distructuring object
const myObj = {
    a: 1,
    b: 2,
    c: 3
};


const { a, b, c } = myObj;

console.log(a, b, c);

// distructuring array
const numberArray = [1, 2, 3];

const [numberOne, numberTwo, numberThree] = numberArray;

console.log(numberOne, numberTwo, numberThree);


// map function
const myMap = new Map([
    ['1', 'one'],
    ['2', 'two'],
    [true, 'true'],
]);

console.log(myMap.size);
console.log(myMap.set('3', 'three'));
console.log(myMap.size);

console.log("---------------------WeakMap---------------------");
const {inspect} = require('util');

let visitCountMap = new WeakMap()

function countUser(user){
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let user = [
    {name: 'John'},
    {name: 'Pete'},
    {name: 'Mary'},
]

countUser(user);

user = null;

// setTimeout(function(){
//     console.log(inspect(visitCountMap, {showHidden: true, depth: null}));
// }, 10000);

console.log(inspect(visitCountMap, {showHidden: true, depth: null}));

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);


function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);



