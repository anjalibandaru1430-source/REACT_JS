let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmloyee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback();
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for (const emp of employees) {
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                        </tr>`
        }
    document.getElementById('tbody_data').innerHTML=rows;
    //document.getElementById('tbody_data').innerHTML="GM"
    },1000)
}
createEmloyee({eid:103,ename:"Priya",esal:65000},getEmployees)
