let state={
    uid:101,
    uname:"Rahul",
    product:{
        pid:'p101',
        pname:"Marker Pen",
        price:30
    }
}

let {uid,uname} = state;  //Object Destructiring
console.log(uid)  //101
console.log(uname)  //Rahul