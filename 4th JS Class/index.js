// var names = ["John", "David", "Shaun", "Tom"];
// // // document.write(names+"<br>");

// // // document.write(names[0] + "<br>");
// // // document.write(names[1] + "<br>");
// // // document.write(names[2] + "<br>");
// // // document.write(names[3] + "<br>");

// // // for(var i = 0 ; i<names.length; i++)
// // //     document.write(names[i] + "<br>");
// // for(var i = 0 ; i<names.length; i++)
// //    document.write("<h1 style='color:red'>" + names[i] + "</h1>");

// // for(var i = 0 ; i<names.length; i++)
// //    document.write("<h1 style='background:red; color:black'>" + names[i] + "</h1>");
 
//  //taking inputs with array
// //  var myList = new Array(5);
// // for(var i = 0 ; i < myList.length; i++){
// //    myList[i] = prompt("Enter" + i +  " index number");
// // }
// // for(var i = 0 ; i<myList.length; i++)
// //    document.write(myList[i] + "<br>");

// // for(var i = 0 ; i < myList.length; i++){
// //    myList[i] = prompt("Enter" + i +  " index number");
// //    document.write(myList[i] + "<br>");
// // }
   
// // var namesType2 = new Array();
// // var namesType3 = new Array(5);
// // var namesType4 = new Array();
// // var sortedNames = new Array();

// // namesType2[0] = "Karim";
// // namesType2[1] = "Rahim";
// // namesType3[0] = "Jannatul";
// // namesType3[1] = "Ferdous";
// // document.write(namesType2.concat(namesType3)) +"<br>";
// // document.write(namesType2 + "<br/>");

// // //have to put it in a new array
// // namesType4 = namesType2.concat(namesType3);
// // document.write(namesType4);

// // // loop in Array
// // document.write("<br/>" +"Loop in Array" +"<br/>");
// // for(var i = 0; i<3; i++)
// // namesType4[i] = parseInt(prompt("Enter any number"));

// // for(var i = 0; i<3; i++)
// // document.write(namesType4[i] + "<br/>");


// // //pop (removes from last)
// // names.pop();
// // console.log(names);

// // // //push adds element in the last
// // names.push("Test")
// // console.log(names);

// //shift is opposite of pop (removes from first)
// names.shift();
// console.log(names);

// //unshift : adds element in the first
// names.unshift("You");
// console.log(names);

// // //splice method : with it elements can be added/removed
// // //splice(add elements, remove elements) 
// // //first parameter is for starting index
// // number of elements you will delete/remove
// // names.splice(2, 0, "zxc", "dxf");
// // console.log(names);
// // //second parameter is for deleting number of elements starting from first index
// // names.splice(0, 1);
// // console.log(names);

// // //slice: returns an array and never changes the main array.
// // namesType4 = names.slice(2,5); // 2 is the starting index
//                                   //5-2 = 3 elements will be sliced not delete.
// // console.log(names);
// // console.log(namesType4);
// // namesType4 = namesType4.sort();
// // console.log(namesType4);
// // //reverse sorting
// // namesType4.reverse();
// // console.log(namesType4);

// // // sorting can sort strings not numbers
// var numbers = [67, 98, 23];

// // number sorting user defined function
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);



// // // finding the highest number
function highestScore(scores){
    var high = scores[0];
    for(var i = 0; i < 3; i++){
        if(high < scores[i])
            high = scores[i];
    }
    return high;
}

var scores = [34, 12, 78];
console.log (highestScore(scores));

// // //2d array declaration
 var studentInfo = [[1, "A"], [2, "B"], [3, "C"]];

for(var i = 0; i < studentInfo.length; i++){
    for(var j = 0; j < studentInfo.length - 1; j++)
        document.write(studentInfo[i][j] + "      ");
    document.write("<br>");
}