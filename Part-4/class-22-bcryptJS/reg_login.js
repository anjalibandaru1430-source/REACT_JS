import bcrypt from 'bcrypt'
let user={
    uname:'rahul@gmail.com',
    mobile:'9591619191',
    password:'ILoveIndia'
}
let user_login={
    uname:"rahul@gmail.com",
    password:'ILU'
}
let salt=bcrypt.genSaltSync(10);
let new_Pwd=bcrypt.hashSync(user.password,salt);
console.log(user.password)
console.log(new_Pwd)

let new_user={...user,password:new_Pwd}
let flag=bcrypt.compareSync(user_login.password,new_user.password);
console.log(user_login.password)
if (flag ===true) {
        console.log("Login success")
} else {
    console.log("Login Failed")
}