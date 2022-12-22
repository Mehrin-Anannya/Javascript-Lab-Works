// clear();
// //Relational Operator
 var firstNumber = 100;
 var secondNumber = 50;
// var thirdNumber = 40;

// console.log(firstNumber > secondNumber);
// console.log(firstNumber >= secondNumber);
// console.log(firstNumber < secondNumber);
// console.log(firstNumber <= secondNumber);
// console.log(firstNumber == secondNumber);
// console.log(firstNumber === secondNumber);
// console.log(firstNumber === "100");
// console.log(firstNumber != secondNumber);
// console.log(firstNumber !== secondNumber);
// console.log(firstNumber !== "100");

// //Logical Operator

// console.log(firstNumber > secondNumber && firstNumber > thirdNumber); 
// console.log(firstNumber > secondNumber || firstNumber > thirdNumber); 
// console.log(!true);
// console.log(!firstNumber > secondNumber)

//conditional statements 
//if, else if, else
var digit = (Number(prompt("Enter any number")));

//approach 1st
if(digit <= 100)
    document.write("<= 100");
else if(digit > 100 && digit <= 200) 
    document.write("> 100 & <= 200");
    else if(digit > 200 && digit <= 300)
        document.write(">200 & <=300");
        else 
            document.write("Invalid");
            
 //approach 2nd           
if(digit <= 100)
    document.write("<= 100");
else if(digit > 300) 
    document.write("Invalid");
    else if(digit > 200)
        document.write(">200 & <=300");
    
// if(digit < 10 && digit > 0)
//     document.write("The number is within 0-10");
// else if (digit > 10 || digit >20 )  
//     document.write("The number is greater than 30");
// else 
//     document.write("The number doesn't satisfies previous two conditions");
if(digit > 0)
"<br/>Positive<br/>"
else
"<br/>Negative<br/>"
//     // ternary operator
var print = digit > 0 ? "<br/>Positive<br/>": "<br/>Negative<br/>";
//var print = (!firstNumber && digit  > digit) ? digit > 0 ? "<br/>A<br/>":"<br/> B <br/>":"<br/>Negative<br/>";
document.write(print);
//digit > 0 ? document.write("<br/>Positive<br/>"):document.write("<br/>Negative<br/>");
//     //switch
// var t = parseInt(digit/10)
// switch(t){
//     case 10: 
//     case 9: 
//     case 8: document.write("<br/> A+");
//     break;
//     case 7: document.write("<br/>A");
//     break;
//     case 6: document.write("<br/>B");
//     break;
//     default: document.write("<br/>Invalid");
// }

// //looping
// for(var i = 0; i<3; i++)
// document.write(i+ "<br/>");

// var i = 1;
// while(i<=10){
//     document.write(i + "<br>");
//     i++;
// }

// do{
//     document.write(i + "<br>");
// }
// while(i <= 10)
// var i = 1;
// while(i<=10){
//     document.write(i + "<br>");
//     i++;
// }

// do{
//     document.write(i + "<br>");
//     i++;
// }
// while(i <= 12)

// for(i = 0 ; i < 5; i++)
//  {   if(i==2)
//         break;
//     document.write(i + "<br/>");
// }

// //continue
// for(i = 0 ; i < 5; i++)
//  {   if(i==2)
//         continue;
//     document.write(i + "<br/>");
// }



