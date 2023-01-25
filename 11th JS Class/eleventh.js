//try....catch block 
//try is for code execution and catch is for error handling in it
//alert(y);
// try {
//     alert("Hello from try block.");
//     //alert(y);
//    // myFunction();
// } 
// catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }
// finally{
//     alert("Executing Finally block");
// }


// //throw statement
// function myFunction() {
//     const message = document.getElementById("paraId");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x == "")  throw "is empty";
//       if(isNaN(x)) throw "is not a number";
//       x = Number(x);
//       if(x > 10)   throw "is too high";
//       if(x < 5)  throw "is too low";
//     }
//     catch(e) {
//       message.innerHTML = "Input " + e;
//     }
//     finally {
//      // document.getElementById("demo").value = "Finally is executing";
//     }
//   }

//ES6 Modules
  //import {text} from './es6modules.js';
  import {text, setText} from './es6modules.js';

  console.log(text);
  //document.write(text);// it will not show
  //document.write('<p>' + text +'</p>');
  setText("Hello From ES6 Modules");
  console.log(text);