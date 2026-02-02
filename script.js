// task-1
let numbers = [1, 2, 3, 4, 5];
let  result = numbers.map(num => num * 3);
console.log(result);

// Task-2
let num1=[12,5,8,130,44];
let show=num1.filter((n)=>n>10);

console.log(show);
// task-3
let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});

// task-4

let  users = [
 { name: "Ali", age: 22 },
 { name: "Sara", age: 18 },
 { name: "Ahmed", age: 25 }
]

let name= users.map((e=>e.name))
console.log(name);

// task-5
let above = users.filter((e=> e.age>18))
console.log(above);

// task-6
const products = [
 { id: 1, name: "Laptop" },
 { id: 2, name: "Phone" },
 { id: 3, name: "Tablet" }
]

let id= products.filter((e=>e.id==2))
console.log(id);

// task-7

const scores = [70, 85, 90, 60];
let all = scores.every((e=>e>50))
console.log(all);
// task-8
const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];
let gmail = emails.some((e=>e=="test@gmail.com"))
console.log(gmail);
