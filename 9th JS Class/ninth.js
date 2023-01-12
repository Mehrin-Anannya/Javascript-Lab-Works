const names = ["Karim", "Rahim", "John"];
//for of
document.write("For of use: ");
for(let name of names){
    document.write(name + "\t");
}

document.write("<br/> For in loop use: <br/>");
//for in loop
let person = {
    id : 1,
    name : 'Mehrin Anannya',
    profession: 'Teaching'
}

for(let x in person){
    document.write(x + " : " + person[x] + "<br/>");
}


//Solve the following
let student = [
    {
    id : 1,
    name : 'Mehrin ',
    profession: 'Teaching'
}, {
    id : 2,
    name : ' Anannya',
    profession: 'Student'
}]

for(let t of student){
    for(let x in t)
    document.write(x + " : " + t[x]);
}


//For Each loop
document.write("<br/> For Each loop use: <br/>");
var numbers = [1, 21, 31 , 41];
numbers.forEach(myfunction);

function myfunction(x){
    document.write(x + "<br/>");
}

//map
document.write("<br/> Map use: <br/>");
//Map itself returns value in an array i.e. squareNumbers is the array.
var squareNumbers = numbers.map(function(x){
    return x*x;
})
document.write(squareNumbers + "<br/>");

//filter 
document.write("<br/> Filter use: <br/>");
var numbers_filter = [1, 21, 31 , 41, 67, 90];
var filteredNumbers = numbers_filter.filter(function(x){
    return x>20;
})
document.write(filteredNumbers + "<br/>");


// Arrow function
const display = () => {
 document.write("<br/>Hello from arrow function.");
}
 display();

function abc(){
    return "Hello without return keyword";
}
 //without return keyword 
 //but if use return then use {return ....}
 var display2 = () => "Hello without return keyword";
 document.write("<br/>" + display2() + "<br/>");

//arrow, map, filter
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