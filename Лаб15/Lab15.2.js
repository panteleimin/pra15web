let numbers = [1, 2, 3];
let fruits = ['apple','orange','banana'];

let arr1 = [1,2,3];
let arr2 = [4,5,6];


let [firstNumber, secondNumber, thirdNumber] = numbers;

console.log("Numbers");
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

let [firstFruit, ...restFruits] = fruits;

console.log("Fruits");
console.log(firstFruit);
console.log(restFruits);



let combinedarr3 = arr1.concat(arr2);

let [...rest] = combinedarr3;

console.log("Numbers");
console.log(rest);