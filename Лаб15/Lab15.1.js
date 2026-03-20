student = {
    name: "Vitalik",
    age: 17,
    gender: "Man"
}

car = {
    cylinder: "V6",
    horsepower: 20,
}

book = {
    title: "Something",
    author: "Panteleimin"
}

let {name: studentName, age: studentAge, gender: studentGender} = student;

console.log("Student");
console.log(studentName);
console.log(studentAge);
console.log(studentGender);

let {cylinder: carCylinder, horsepower: carHorsepower} = car;

console.log("Car");
console.log(carCylinder);
console.log(carHorsepower);

let {title: bookTitle, author: bookAuthor} = book;

console.log("Book");
console.log(bookTitle);
console.log(bookAuthor);
