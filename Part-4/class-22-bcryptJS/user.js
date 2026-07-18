import bcrypt from 'bcrypt'
let user={
    uname:'rahul@gmail.com',
    mobile:'9591619191',
    password:'ILoveIndia'
}
let salt=bcrypt.genSaltSync(10);
let new_Pwd=bcrypt.hashSync(user.password,salt);
console.log(user.password)
console.log(new_Pwd)

let new_user={...user,password:new_Pwd}
console.log(user)  //getting from fronent form
console.log(new_user)//storing into db