// const names = ["Karim", "Rahim", "John"];
// //for of
// document.write("For of use: ");
// for(let name of names){
//     document.write(name + "\t");
// }

// document.write("<br/> For in loop use: <br/>");
// //for in loop
// let person = {
//     id : 1,
//     name : 'Mehrin Anannya',
//     profession: 'Teaching'
// }

// for(let x in person){
//     document.write(x + " : " + person[x] + "<br/>");
// }


//Solve the following
let students = [
    {
    id : 1,
    name : 'Mehrin ',
    profession: 'Teaching'
}, {
    id : 2,
    name : ' Anannya',
    profession: 'Student'
}];

// for(let t of students){
//     for(let x in t)
//     document.write(x + " : " + t[x] + ",\t");
//     document.write("<br>");
// }

// document.write("id: " + students[0].id +", " + students[1].id);

// for(i = 0 ; i < students.length; i++)
// document.write( "for " + i + " : " + students[i].id +", " 
// + students[i].name + "<br>");

//  for(i of students)
//  document.write(i.id +", " + i.name + "<br>");
// document.write('name' in students[0]);
//  for(let i of students){
//  for(let y in i){
//  if(y == 'name')
//  document.write(i[y] + ", ");
//  }
//  }

// //For Each loop
document.write("<br/> For Each loop use: <br/>");
var numbers = [1, 21, 31 , 41];

function myfunction(x){
    document.write(x + "<br/>");
}

numbers.forEach(function(x){
    document.write(x + "<br/>");
});



//map
// document.write("<br/> Map use: <br/>");
// //Map itself returns value in an array 
// //i.e. squareNumbers is the array.
// var squareNumbers = numbers.map(function(x){
//     return x*x;
// })
// document.write(squareNumbers + "<br/>");

// // //filter 
// document.write("<br/> Filter use: <br/>");
// var numbers_filter = [1, 21, 31 , 41, 67, 90];
// var filteredNumbers = numbers_filter.filter(function(x){
//     return x>20;
// })
// document.write(filteredNumbers + "<br/>");


// // General function
function abc(){
    return "Hello from general function.";
}
document.write(abc());
// Arrow function
 //without return keyword 
 //but if use return then use {return ....}
 const display = () => {
    return "<br/>Hello with return arrow function.";
 }
   document.write(display());

 var display2 = () => "Hello without return keyword";
 document.write("<br/>" + display2() + "<br/>");

 // Solve a arrow function with parameterized function
 add = (a, b) => document.write("Add: " + (a+b), "  Sub: " + (a-b));
 add(1,2); 
// //arrow, map, filter
students= [
    {
        id : 1,
        name : "Karim",
        cgpa : 3.67
    },
    {
        id : 2,
        name : "Rahim",
        cgpa : 4.00
    },
    {
        id : 3,
        name : "Shamim",
        cgpa : 3.70
    }
];

function showStudentNames(){
    return students.filter(function(x){ 
       return x.cgpa > 3.67
    }).map(function(y){
        return y.name;
    });
}
document.write("check:" +students[1].name);
document.write("<br/>" + showStudentNames() + "<br/>");

const showStudentNamesWithArrow = () => students.filter((x) =>
 x.cgpa > 3.67).map((y) =>  y.name);

 document.write("<br/>" + showStudentNamesWithArrow() + "<br/>");