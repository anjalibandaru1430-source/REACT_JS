let emp={
    eid:101,
    ename:"Rahul",
    esal:45000
}
let product={}
console.log(emp.loc)
console.log(emp.length)
console.log(Object.keys(emp))  //[ 'eid', 'ename', 'esal' ]
console.log(Object.keys(emp).length) //3
console.log(Object.keys(emp).length>0) //true

if (Object.keys(product).length>0) {
    console.log("Not Empty Object")
} else {
    console.log('Empty Object')
}