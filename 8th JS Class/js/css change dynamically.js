// let text = document.querySelector("#paraId");
// text.addEventListener("click", function(){
//     text.className = "textStyle";
// });

// let textOne = document.querySelector(".paraId");
// for(var i = 0; i < textOne; i++){
//     document.querySelectorAll(".paraId")[i].
//     addEventListener("click", function(){
//         i.className = "textStyle";
//     });
// }

//Change color of all the paragraphs on clicking the first paragragh
let paraDoc = document.querySelectorAll(".paraId");
document.querySelector(".paraId").
    addEventListener("click", function(){
        for(i = 0; i < paraDoc.length; i++)
        paraDoc[i].className = "textStyle";
        //document.querySelectorAll(".paraId")[i].innerHTML = "new";
    });

