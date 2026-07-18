//2. To Merge arrays/objects
let a=[10,20,30];
let b=[30,40,50];
let c=[...a,...b]  //Merge arrays using spread operator
console.log(c)//[10,20,30,30,40,50]
//Array allowed duplicates