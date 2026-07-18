//how to verify given array is empety or not ?
let users=[]
let eids=[101,102,103]
console.log(users.length)  //0
console.log(eids.length)  //3

/* if (eids.length>0) {
    console.log("Not Empty Array")
} else {
    console.log("Empty Array")
} */

//condition st?  true st : false st
eids.length>0 ? console.log("Not Empty Array"):console.log("Empty Array")
users.length>0 ? console.log("Not Empty Array"):console.log("Empty Array")