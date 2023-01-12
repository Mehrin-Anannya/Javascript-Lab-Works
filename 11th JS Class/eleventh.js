//try....catch block 
//try is for code execution and catch is for error handling in it
try {
    alert("Hello from try block.");
    alert(y);
    //myFunction();
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert("Executing Finally block");
}


//throw statement
function myFunction() {
    const message = document.getElementById("paraId");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(e) {
      message.innerHTML = "Input " + e;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }