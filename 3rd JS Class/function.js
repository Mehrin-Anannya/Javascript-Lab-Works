// // //without function
// var num = 16;
// document.write ("<br/>Result is:  " + num * num);

// var num = 25;
// document.write ("<br/>Result is:  " + num * num);

// var num = 36;
// document.write ("<br/>Result is:  " + num * num);

// // //using function
// function square(){
//     var num = 16;
//     document.write ("<br/>Result is:  " + num * num);    
// }
// square();
// square();
// // //parameterized function calling
// function square_p(num){
//     document.write ("<br/>Parameterized function's result is:  " + num * num);    
// }
//  square_p (16);
//  square_p(25);
//  square_p(10);

// let username = prompt("Enter your username:");
// let password = prompt("Enter your password:");

// function getUserNamePassWord(uN, pas){
//     document.write("Your Username: " +username + "<br/>");
//     document.write("your password: " + password);
// }

// getUserNamePassWord(username, password);

// function add(num1, num2){
//     document.write("<br/> Parameterized addition:" +(parseInt(num1) + parseInt(num2)));
//     document.write("<br/> Parameterized addition:" +(num1 +num2));
// }

// function sub(num1, num2){
//     return parseInt(num1) - parseInt(num2);
// }
// document.write("<br/>function returning: " +sub(100,45));
// //calling a function
// square();
// square();

// //parameterized function calling
// square_p(178);
// add(3,5);
// //sub(100,45);


 //IIFEs(Immediately Invokeable Function Expressions)
 (function show(num1, num2){
     document.write("<br/>IIFEs Immediately Invokeable Function Expressions" + num1 +"<br>" + num2);
  })(12, 45);



//  (function show_1(message){
//     document.write(message);
// })("<br/>IIFEs Immediately Invokeable Function Expressions Execution");


