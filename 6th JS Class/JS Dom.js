// //getElementById
// console.log(document.getElementById("header1"));

// //document.getElementById("header1").innerHTML = "Without Variable";
// var htmltag = document.getElementById("header1");
// console.log(htmltag);
// var header = document.getElementById("header1").innerHTML;
// console.log(header);
// htmltag.innerHTML = "Test";
// document.write(htmltag.innerHTML);

// //getElementsByTagName
//document.getElementsByTagName("h3"); // practice it in console; it returns HTML Collection
//var t = document.getElementsByTagName("h3").innerHTML = "Good students"; // will not show any change 
//document.getElementsByTagName("h3")[0].innerHTML = "Good girls";
//document.getElementsByTagName("h3")[1].innerHTML = "Good boys";

//getElementsByClassName
// document.getElementsByClassName("h2"); // practice it in console; it returns HTML Collection
// document.getElementsByClassName("h2").innerHTML = "H2 - Good students"; // will not show any change 
// document.getElementsByClassName("classheader1")[0].innerHTML = "H2 - Good girls";
// document.getElementsByClassName("classheader1")[1].innerHTML = "H2 - Good boys";

//query Selector in replace of Id or class
// document.querySelector("#header1").innerHTML= "Query selector with ID";

// document.querySelector(".classheader1").innerHTML= "Query selector with Class";

// // querySelectorAll for changing all the htmlcollection with same name
// document.querySelectorAll(".classheader1")[0].innerHTML = "Query selector all with Class-First";

// document.querySelectorAll(".classheader1")[1].innerHTML = "Query selector all with Class - Second";


// // //query Selector in replace of Tag Name
//  document.querySelector("h3").innerHTML = "QuerSelector of tag";

//query selector use in case of parent and child relation
// document.querySelector("a").innerHTML = "1st anchor tag";
// document.querySelector("li a").innerHTML = "parent li - child anchor tag";
// document.querySelector(".my-div a").innerHTML = "parent div class - child anchor tag";
