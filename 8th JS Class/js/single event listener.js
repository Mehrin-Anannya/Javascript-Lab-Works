// document.querySelector("button").
// addEventListener("click", listenerFunction);

//  function listenerFunction(){
//     alert("Hello");
//  }


// document.querySelector("button").
// addEventListener("click", 
// function listenerFunction(){
//     alert("Hello");
//  });


//  document.querySelector("button").
//  addEventListener("click", 
//  function(){
//      alert("Hello");
//   });
 
//without click event its is working on load because of 
//immediately invokeable function  
// document.querySelector("button").
//  addEventListener("click", 
//  function(a, b){
//     document.write(a+b);
//   }(1,2));

 document.querySelector("button").addEventListener("click", function(){
    listenerFunction(1,2);
    document.write("Hell0");
});

function listenerFunction(a, b){
        alert(a+b);
      }
