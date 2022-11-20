//Relational Operator
var firstNumber = 100;
var secondNumber = 50;
var thirdNumber = 40;

console.log(firstNumber > secondNumber);
console.log(firstNumber >= secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber === "100");
console.log(firstNumber != secondNumber);
console.log(firstNumber !== secondNumber);
console.log(firstNumber !== "100");

//Logical Operator

console.log(firstNumber > secondNumber && firstNumber > thirdNumber); 
console.log(firstNumber > secondNumber || firstNumber > thirdNumber); 
console.log(!true);
console.log(!firstNumber > secondNumber)

//conditionl statements 
//if, else if, else
var digit = prompt("Enter any number");

if(digit < 10 && digit > 0)
    document.write("The number is within 0-10");
else if (digit > 10 || digit >20 )  
    document.write("The number is greater than 30");
else 
    document.write("The number doesn't satisfies previous two conditions");

    // ternary operator
    var print = digit > 0 ? "<br/>Positive<br/>":"<br/>Negative<br/>";
var print = (!firstNumber && digit  > digit) ? digit > 0 ? "<br/>A<br/>":"<br/> B <br/>":"<br/>Negative<br/>";
document.write(print);

    //switch
var t = parseInt(digit/10)
switch(t){
    case 10: 
    case 9: 
    case 8: document.write("<br/> A+");
    break;
    case 7: document.write("<br/>A");
    break;
    case 6: document.write("<br/>B");
    break;
    default: document.write("<br/>Invalid");
}

//looping
for(var i = 0; i<3; i++)
document.write(i+ "<br/>");

while(i=0){

}

do{

}while(i=0)

//break
for(i = 0 ; i < 5; i++)
 {   if(i==2)
        break;
    document.write(i + "<br/>");
}

//continue
for(i = 0 ; i < 5; i++)
 {   if(i==2)
        continue;
    document.write(i + "<br/>");
}

//without function
var num = 16;
document.write ("<br/>Result is:  " + num * num);

var num = 25;
document.write ("<br/>Result is:  " + num * num);

var num = 36;
document.write ("<br/>Result is:  " + num * num);

//using function
function square(){
    var num = 16;
    document.write ("<br/>Result is:  " + num * num);    
}

square();


//parameterized function calling
function square_p(num){
    document.write ("<br/>Parameterized function's result is:  " + num * num);    
}

square_p (16);
square_p(25);
square_p(10);

function add(num1, num2){
    document.write("<br/> Parameterized addition:" +(parseInt(num1) + parseInt(num2)));
    document.write("<br/> Parameterized addition:" +(num1 +num2));
}

function sub(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
document.write("<br/>function returning: " +sub(100,45));
//calling a function
square();
square();

//parameterized function calling
square_p(178);
add(3,5);
//sub(100,45);
//IIFEs(Immediately Invokeable Function Expressions)
 (function show(){
     document.write("<br/>IIFEs Immediately Invokeable Function Expressions");
 })();



 (function show_1(message){
    document.write(message);
})("<br/>IIFEs Immediately Invokeable Function Expressions Execution");





