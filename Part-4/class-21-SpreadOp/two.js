let enames=['RG','SG','PG'];
//create a new array based on existing enames
let unames=[];
for(let ename of enames){
    unames.push(ename)
}
unames[1]="sonia";
console.log(enames)
console.log(unames)