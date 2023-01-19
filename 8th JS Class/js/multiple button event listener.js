// document.querySelectorAll(".myButton")[0].
// addEventListener("click", function(){
//     document.querySelector("h1").innerHTML 
//     = this.innerHTML + " is clicked";
// });



var len = document.querySelectorAll(".myButton").length;
for(var i = 0; i < len; i++){
    document.querySelectorAll(".myButton")[i].
    addEventListener("click", function(){
        document.querySelector("h1").innerHTML = 
        this.innerHTML + " is clicked";
    });
}
