//second class
//data type
//string Example: "Mehrin Anannya" + "   "(empty string)
//Number Example: 123 / 123.54647
//boolean Example: false / true
// use type
//use typeof() in browser to show datatype
//variable defining criteria
// var name1="B";
// var name2="A";
// var name_="A_";
// var name_father="A_";
// var firstName = "VGG";
// var lastname= "2";
// var age = 23.45636;
// var age1 = 54;
// var asA = "10";
// var asa = "10";
 var floatNumber = 3.898;
 var floatNumber = 2;

//let keyword
var age1 = 6;
//let age1 = 5;
document.write(floatNumber);
document.write(age1);
//var name$="f"; // notrecommended because of its use in jquery
// var 1name="D" and na me cannot be used. keyword cannot be used
// keyword cannot be used as
//document.write(name_father);
//console.log(name_father);
//console.log(window);
//document.writeln(name$+"<br>");
//document.write("<p style = 'color:red;'>This is a para.</p>");
//document.writeln(name1);
// document.writeln(name$+"<br/>");
// //document.writeln(" \n");
// document.writeln(age1, age+"<br/>");
// console.log(typeof(age1, age, name1, firstName));
// //Number to String
// age1 = age1.toString();
// //age1 = toString(age1); not the write approach to print the string converted text can be used only fot typeof
// console.log(typeof(age1));
// //String converion to print
// console.log(age1);
// //String to Number possible only for "100" but not for "jbjsdc"
// age = parseInt(age);
//
// console.log(typeof(age));
// console.log(age);
// //Integer To Float
// age1 = parseFloat(age1);
// console.log(typeof(age1));
// console.log(age1);
// console.log(age.  //returns String
// console.log(floatNumber.toFixed(3)); //returns String
// console.log(floatNumber.toPrecision(3)); //returns String
// console.log(Number("ddsds"));
// console.log(Number("434"));
// console.log(Number("      24     "));
// console.log(Number(true));

// //User Input
// var firstNum = prompt("Enter first Number");
// var secondNum = prompt("Enter second Number");
// document.write(Number(firstNum) + Number(secondNum));

// var firstNum = Number(prompt("Enter first Number"));
// var secondNum = Number(prompt("Enter second Number"));
// document.write(firstNum + secondNum);
// // core refactoring
// document.write(
//   Number(prompt("Enter first Number")) + Number(prompt("Enter second Number"))
// );

//String Library Functions
// var studentFirstName = prompt("Enter your first Name");
// var studentLastName = prompt("Enter your last Name");
// document.write(studentFirstName + studentLastName);

// document.writeln(
//   "String Concatenation:   " +
//     studentFirstName.concat(" " + studentLastName) +
//     "<br/>"
// );
// //Function for String Length : .length
// document.write("Length of Last Name:  " + studentLastName.length + "<br/>");
// //Function for String Lowercase : .toLowerCase()
// document.writeln(
//   "String Lowercase Function:   " + studentLastName.toLowerCase() + "<br/>"
// );
// //Function for String Lowercase : .toUpperCase()
// document.writeln(
//   "String Uppercase Function:   " + studentLastName.toUpperCase() + "<br/>"
// );
// //Function for String Lowercase : .slice()
// document.writeln(
//   "String Slice Function:    " + studentLastName.slice(0, 3) + "<br/>"
// );
// //Function for String Lowercase : .charAt()
// document.writeln("String CharAt Function:   " + studentFirstName.charAt(3));

//Arithmetic operator
let a = 10;
let b = 20;

document.write("<br> Arithmetic: " + (a + b));
//document.write("<br> a++: " + a++);
b=a++; //for better understanding
//b=++a; //for better understanding
document.write("<br> a: " + a);
document.write("<br> b: " + b);

//Assignment operator
b = b + 1;
b+=1;