let enames=['RG','SG','PG']
//create a new array based on existing enames
let unames=enames;  //array aliasing
unames[1]="sonia"
console.log(enames)
console.log(unames)