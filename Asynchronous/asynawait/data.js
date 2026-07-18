let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_flag=true;
            if(db_flag===true){
                employees.push(emp)
                resolve("Data Inserted")
            }
            else{
                reject("Failed")
            }
        },4000)
    });
}
let getEmployees=()=>{
     setTimeout(()=>{
        let rows="";
        for (const emp of employees) {
                rows=rows+`<tr>
                                <td>${emp.eid}</td>
                                <td>${emp.ename}</td>
                                <td>${emp.esal}</td>
                            </tr>`

        }
        document.getElementById('tb_data').innerHTML=rows;
     },1000)
}

let execute=async()=>{
    await createEmployee({'eid':103,ename:"Priya",esal:65000});
    getEmployees();
}
execute()