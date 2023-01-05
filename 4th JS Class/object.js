// //Object

//student variables without object creation
// var name = "Mehrin Anannya";
// var roll = 12345;
// var year = "1st";
// var courses = ["Operating System", "Data Structure", "Algorithm"];

// // //student variables with object creation
// var student1 = {
//     name : "Mehrin Anannya",
//     roll : 12345,
//     year : "1st",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }

// var student1 = {
//     name : "Karim",
//     roll : 12345,
//     year : "1st",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }

// var student2 = {
//     name : "Rahim",
//     roll : 6789,
//     year : "2nd",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }

// var student3 = {
//     name : "Rahim",
//     roll : 4566,
//     year : "3rd",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }
// console.log(student1);
//  console.log(student1.courses);
// console.log(student2.name);
//console.log(student3.roll);

//object represntation with class nd its constructor 
// class GFG {
//     constructor(A, B) {
  
//         // "this" refers to the address
//         // of the keys "g" and "f"
//         this.g = A;
//         this.f = B;
//     }
//     print() {
//         document.write(this.g +"<br>"+this.f);
//     }
// }
// let gg = new GFG("JavaScript", "Java");
// gg.print();

// // //object represtation without using class structure but with constructor

// function Student(name, age, roll, year, courses){
//     this.name = name;
//     this.age = age;
//     this.roll = roll;
//     this.year = year;
//     this.courses = courses;
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.roll);
//         console.log(this.year);
//         console.log(this.courses);
//     }
// }
// var student5 = new Student("AS", 23, 123, "1st", 
// ["Operating System", "Data Structure", "Algorithm"]);
// console.log(student5.name); 
// console.log(student5);

// var student6 = new Student("ASsfsf", 25453, 123, "2nd", 
// ["Data Structure", "Algorithm", "Operating System"]);
// console.log(student6.name); 
// console.log(student6.roll);

// //adding function in the object
// student5.display();
// student6.display();


// task: create a class of customer, and taking user inputs in its object
//  Customer{
    //customerId: int;
    //customerName: String;
    //profession: String;
    //items: Array;
//  }

//Solution
class Customer{
    constructor(customerId, customerName, profession, items){
        this.customerId = customerId;
        this.customerName = customerName;
        this.profession = profession;
        this.items = items;
    }

    show(){   
        document.write("This is Customer Id: " + customerId +"<br>" + "Customer Name: " 
        + customerName +"<br>" + "Profession: " + profession + "<br>" + "and I bought the items: ");
        for(var i = 0; i< items.length; i++){
            document.write(items[i] + " ");
        }
    }
}
let customerId = parseInt(prompt("Enter your Customer Id"));
let customerName = prompt("Enter your Customer Name");
let profession = prompt("Enter your profession");
let items =  new Array(2);
for(let i = 0; i < items.length; i++){
    items[i] = prompt("Enter" + i + " item's name");
}
 let customer1 = new Customer(customerId, customerName, profession, items);
    customer1.show();


