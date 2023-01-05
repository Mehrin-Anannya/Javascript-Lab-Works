//Library functions of Math 
Math.sqrt(17);
Math.abs(-19);
Math.sin(30);
Math.pow(10, 4);
Math.floor(2.678);
Math.floor(2.3333);
Math.ceil(3.67);
Math.ceil(3.44);
Math.round(4.778);
Math.round(4.23);
Math.max(3,5,7,10);
Math.min(3,5,7,10); // can be any number of parameters
Math.random(); // generates number within 0-1.
Math.random() * 8; // generates number < 8.
Math.floor(Math.random() * 8); // generate random number wihin 0 to 8
Math.floor(Math.random() * 8) + 1; // generate random number wihin 1 to 8(inclusive)


//Date object and date methods
var date = new Date();
console.log("Date:  "+ date);

var year =  date.getFullYear();
console.log("Year: " + year);

var month = date.getMonth();
console.log("Month: " + month);

var currentDate = date.getDate();
console.log("Current Date: " + currentDate);

var currentDay = date.getDay();
console.log("Current Day: " + currentDay); // 0 - Sunday,....., 6 - Saturday

var currentHour = date.getHours();
console.log(currentHour);

var currentMinutes = date.getMinutes();
console.log("Current Minutes: " + currentMinutes);

var mydate = new Date("2015-03-25");// user defined date