var a=10;
var b=20;
document.write(a+b+"<br/>");

var students = new Array("A", "B", "C");
for(i = 0; i <students.length; i++)
document.writeln(students[i]+"<br/>");
document.write("array reverse:");
document.write(students.reverse()+"<br/>");
document.write("Popping first element:");
document.write(students.pop()+"<br/>");
document.write("Pushing element: D and its size is:");
document.write(students.push("D")+"<br/>");
document.write("after push:");
for(i = 0; i <students.length; i++)
document.writeln(students[i]+"<br/>");
