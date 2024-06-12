

import { constants } from "fs/promises";
console.log("\n\t Object, Array and Function Assighnment.\n");

//Assignment 1: Building Your Friend List 
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure. 
// Task: Create a program that manages a simple friend list. 
// 1. Define an object named people containing an empty array called friends. 
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id. 
// 3. Add these friend objects to the friends array within the people object. 
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
console.log("\n \t ANSWER_NUMBER : 1 \n");

let people = {
   friends: [] as friend[] 
};

type friend ={
    firstName : string,
    lastName : string,
    id? : number,
};
let friend1: friend = {
    firstName: "Muhamd Saad",
    lastName: "Safir Mughal",
    id: 397424,
};
let friend2:friend = {
    firstName: "Iqra Khan",
    lastName: "Khan",
    id: 979835,
};
let friend3:friend = {
    firstName: "sumera Ali",
    lastName: "Ali",
    id: 459821,
};
people.friends.push(friend1,friend2,friend3);
console.log(people);

// Assignment 2:Manipulating an Array: Rearranging Words 
// Objective: 
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC". 
// Steps: 
// 1. Scrambled Array: 
// o Start with an array of elements in a scrambled order, like: 
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"]; 
// •  Modify the Array: 
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:  
// o Convert non-strings (booleans, numbers) to strings if needed. 
// o Split elements into character arrays (optional). 
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays). 
// •  Output the Result: 
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
console.log("\n \t ANSWER_NUMBER : 2 \n");

const scrambledArray =["student","of",true,123,"am","a","GIAIC", "I"];

scrambledArray.splice(2,4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1,0,"am","a");
let join = scrambledArray.join(" ");

console.log(join);

// Assignment 3: Company Product Catalog 
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information. 
// Task: Create a program to represent a product catalog using an array and perform basic queries. 
// 1. Define an array named inventory to store product information. 
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity. 
// 3. Add these product objects to the inventory array using an appropriate array method. 
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array. 
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.
//Task :Ccreate a program to represent a product catalog using an array and perform basic queries.
//Define an array named and eachrepresenting a product name ,model,cost,and quantity.
console.log("\n \t ANSWER_NUMBER : 3 \n");

const inventory :{ name: string; model: string; cost: number; quantity: number;}[] = [];

let  mobile = {
    name: "iphone",
    model: "14 pro max",
    cost: 565999, 
    quantity : 2,
};
let car = {
    name : "BMW" ,
    model : "3 Series" ,
    cost : 20000000 ,
    quantity : 1,
};

let watch ={
    name: "Rolex" ,
    model: "Submariner" ,
    cost : 8892000 ,
    quantity : 5 ,
};
inventory.push (mobile, car , watch);
console.log("products in Inventory:" ,inventory);
console.log("\n Quantity of the third products\n\t:", inventory [2].quantity);

let AirCooler = {
    name: "Super Asia Air Cooler" ,
    model: "oECM-5000",
    cost : 22900,
    quantity : 6,
};
inventory .push(AirCooler) ;
console.log("\n Adding more products to the inventory:\n" ,inventory [3]);
console.log("\n Current Inventory", inventory)

inventory[0].cost +=565999;
console.log("\n Increase the cost of 1st product in the inventory:" ,inventory[0]);

let removedProduct = inventory.splice(1,1)
console.log("\n Product is removed from the inevetory:",removedProduct);
console.log("\n Current Inventory",inventory);

Question:4
 //Student Data Template
// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
console.log("\n\tAnswer_Number:4 \n");

interface Student {
    name : string,
    seniorStatus : boolean,
    assignmentCompleted : boolean,
};

const students : Student[] = [
    {name :"Saad",seniorStatus :true,assignmentCompleted :true},
    {name :"Ali",seniorStatus :true,assignmentCompleted :true},
    {name :"Hamza",seniorStatus :false,assignmentCompleted :true},
    {name :"Hassan",seniorStatus :false,assignmentCompleted :false},
    {name :"Hussain",seniorStatus :true,assignmentCompleted :true},
    {name :"Fatima",seniorStatus :false,assignmentCompleted :false},
]
console.log("\n Student List:",students);

console.log("\n List of senior students who completed their assignments:");

students.forEach(function(findSeniorStudent){
if(findSeniorStudent.seniorStatus === true && findSeniorStudent.assignmentCompleted === true)
    {
        console.log(`${findSeniorStudent.name} is a senior student and she completed all her assignments.`);
    }
})

console.log("\n Update Class List:");
students.forEach(function(removeStudent){
    if(removeStudent.seniorStatus === true && removeStudent.assignmentCompleted === true)
        {
            console.log(removeStudent);
        }
    })


