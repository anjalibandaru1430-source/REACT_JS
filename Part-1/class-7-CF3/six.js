let employees=[{"eid":1,"ename":"Drew","gender":"Male"},
{"eid":2,"ename":"Sandor","gender":"Male"},
{"eid":3,"ename":"Dagny","gender":"Male"},
{"eid":4,"ename":"Teirtza","gender":"Female"},
{"eid":5,"ename":"Jillayne","gender":"Female"}]
console.log(employees.length)

//print all male employee name
for (const emp of employees) {
        if(emp.gender ==="Female"){
            console.log(emp.ename)
        }
}