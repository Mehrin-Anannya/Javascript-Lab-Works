// function messagebutton1(){
//     alert("Clicked Button 1");
// }

// function messagebutton2(){
//     alert("Clicked Button 2");
// }

// function clickParagraph(){
//     alert("clicked the Paragraph()");
// }

// //using query selector for onclick
// function messagebutton1(){
//     var paraVar = document.querySelector("#paraId");
//     paraVar.innerHTML = "<span style = 'color:red'> You have clicked the Button 1</span>";
// }

// function messagebutton2(){
//     var paraVar = document.querySelector("#paraId");
//     paraVar.innerHTML = "You have the clicked the Button 2";
// }
//var paraVar = document.querySelector("#paraId");
//Change CSS dynamically
// function addStyle(){
//    paraVar.style.color = "red";
//    paraVar.style.fontSize = "3rem";
//    paraVar.style.fontWeight =  "bold";
//    paraVar.style.fontStyle = "italic";
// }

// function removeStyle(){
//     paraVar.style = " ";
// }

// //better approach
//  var paraVar = document.querySelector("#paraId");
// function addStyle(){
//    paraVar.classList = "";
//    paraVar.classList.add("para-style");
//     //console.log(paraVar.classList);
//  }
 
//  function removeStyle(){
//     paraVar.classList.remove("para-style");
//  }

//  function addStyle2(){
//     paraVar.classList = "";
//     paraVar.classList.add("para-style-new");
//   }
 
//image click functions
// var paraVar = document.querySelector("#imageId");
// function peacockimageclicked(){
//     paraVar.src = "images/1.jfif";
// }
    
//  function banshaiimageclicked(){
//     paraVar.src = "images/2.jfif";
// }
// //usability in declaring dynamic page names
// var a = "next";
// function nextPage(){
//     //location.href="next.html";
//     location.href= a +".html";
//  }

//Task : Event Slider
var paraVar = document.querySelector("#imageId");
let count = 1;
function nextImage(){
    count++;
    if(count < 4){
        paraVar.src = "images/" + count + ".jpg";
    }
    else{
        count = 1;
        paraVar.src = "images/" + count + ".jpg";
    }
}

function previousImage(){
    count--;
    if(count > 0){
        paraVar.src = "images/" + count + ".jpg";
    }
    else{
        count = 3;
        paraVar.src = "images/" + count + ".jpg";
    }
}