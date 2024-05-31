console.log("*****Page 61 Ex 1*****");

let numbersObject = {};queue
let count = 0;


function addNumber(newNumber) {
    count++;
    let key = `number${count}`;
    numbersObject[key] = newNumber;
}
addNumber(10);
addNumber(25);
addNumber(30);

console.log(numbersObject);

console.log("*********************");

let numbersObject1 = { num1: 10, num2: 25, num3: 30 };
delete numbersObject1['num1']
console.log(numbersObject1);

console.log("*********************");
let numbersObject4 = {};
function isObjEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return "Empty"
    }
    else return "Not empty"
}
console.log(isObjEmpty(numbersObject4));


console.log("*********************");
let numbersObject3 = { n1: 10, n2: 89, n3: 78, n4: 90 };
function getObjLength(obj) {
    return Object.keys(obj).length

}
const objLength = getObjLength(numbersObject3)
console.log(objLength);