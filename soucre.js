//console.log('hello world');
//console.error('This is an error');
//console.warn('this is a warning');
//single elemnt selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple elements selector
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item')); ( also can use TagName)
//alert('hello world');
//let age = 30;
//age = 31;   //let allows to change the variable
//const age = 31;
//age = 30;
//console.log(age);// const == constant doesnot varies
// primitive datatypes: strings, numbers, decimal(number), boolean, null, undefined, symbol
const name = 'anusree';
const age = 30;
const rating = .5;
const iscool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof(rating));
console.log(typeof(x));
console.log(typeof(y));
//concatenation
console.log('My name is ' + name +' and I am ' + age);
//template string
console.log(`My name is ${name} and I am ${age}.`);
const s = 'hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,7));
const p = 'anu, anoop, bruno';
console.log(p.split(','));

//Arrays - variables that hold multiple values

const numbers = [1, 2, 3, 4];
numbers[3] = 6;
console.log(numbers);
numbers.push(7);//add in the end
numbers.unshift(7);//add in the start
numbers.pop();//pops out the last element
console.log(Array.isArray(numbers));//to check if a variable is array or not
console.log(numbers.indexOf(1));
console.log(numbers);
const person ={
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '5th main street',
    city: 'boston',
    state: 'NY',
  }
}
console.log(person.firstName, person.lastName);
console.log(person.address.city);
console.log(person.hobbies[1]);
 const{ firstName, lastName, address: {city}}= person;
 console.log(city);
 person.email = 'John@gmail.com';
 console.log(person);

 const todos = [{
  id: 1,
  text: 'Take out trash',
  isCompleted: true
},
{
  id: 2,
  text: 'meeting with boss',
  isCompleted: true,
},
{
  id: 3,
  text: 'dentist appt',
  isCompleted: false,
}
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for
  
  for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
  }
//whileloop

let i = 0;
while(i < 10){
  console.log(`while loop number: ${i}`);
  i++;
}
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.isCompleted);
}

//forEach, filter

todos.forEach(function(todo) {
  console.log(todo.text);
})

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted == true;
}).map(function(todo){
  return todo.text;
})
console.log(todoCompleted);

 const q = 10;
 const w = 1;

 if(q > 10 && w <15 ) {
  console.log('q greter than 10 and w less than 15');
 }else if (q < 10 || w > 15) {
  console.log('q is less than 10 and w is greater than 15');
 }else{
  console.log('q is 10 and  w is 15');
}
 //no result === matches the datatype == doesn't

const e = 100;

const color = e > 10 ? 'red' : 'blue';// ? if, : else

console.log(color);

switch(color){
  case 'red':
  console.log('color is red');
  break;
  case 'blue':
  console.log('color is blue');
  break;
  default:
  console.log('color is NoT red or blue');
  break;
}

function addNums(num1 = 0, num2 = 0){
  return num1 + num2;
}

console.log(addNums(5));

//constructor function
//function Person(FirstName, LastName, dob){
 // this.FirstName = FirstName;
 // this.LastName = LastName;
 // this.dob = new Date(dob);
  //this.getBirthYear = function() {
   // return this.dob.getFullYear();
  //}
//}
//Person.prototype.getBirthYear = function(){
//  return this.dob.getFullYear();
//}

//Person.prototype.getFullName = function(){
 // return `${this.FirstName} ${this.LastName}`;
//}




//Class
class Person {
  constructor(FirstName, LastName, dob){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.dob = new Date(dob);
  }
  getBirthYear(){
    return this.dob.getFullYear();
  }
  getFullName(){
    return `${this.FirstName} ${this.LastName}`;
  }
}

// instaniate object
const Person1 = new Person('john', 'Doe', '4-3-1998');
const Person2 = new Person('mary', 'jain', '4-9-1998');

console.log(Person1.getFullName());
