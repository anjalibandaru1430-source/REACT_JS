let state={
    uid:101,
    uname:"Rahul",
    product:{
        pid:'p101',
        pname:"Marker Pen",
        price:30
    }
}
console.log(state.uid) //101
// read object properties like variable
let {uid} = state;  //Object Destructiring
console.log(uid)  //Reference Error