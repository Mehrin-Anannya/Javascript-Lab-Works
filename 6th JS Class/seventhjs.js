function messagebutton1(){
    alert("Clicked Button 1");
}

// function messagebutton2(){
//     alert("Clicked Button 2");
// }

// function clickParagraph(){
//     alert("clicked the Paragraph()");
// }


// //using query selector for onclick
// function messagebutton1(){
//     var paraVar = document.querySelector("#paraId");
//     paraVar.innerHTML = "You have the clicked the Button 1";
// }

// function messagebutton2(){
//     var paraVar = document.querySelector("#paraId");
//     paraVar.innerHTML = "You have the clicked the Button 2";
// }

//image click functions
var paraVar = document.querySelector("#imageId");
function peacockimageclicked(){
    paraVar.src = "images/peacock.jfif";
}
    
 function banshaiimageclicked(){
    paraVar.src = "images/banshai.jfif";
}