//create array
let enames=["Rahul","Sonia","Priya",'Modi']
//indexing    0        1         2     3
//read array
console.log(enames)
//read array elements - using indexing
console.log(enames[0])  //Rahul
console.log(enames[3])  //Modi
console.log(enames[7])  //undefined
//upate
enames[0] ="Rahul Gandhi"
console.log(enames)
//delete
enames.pop()
console.log(enames)