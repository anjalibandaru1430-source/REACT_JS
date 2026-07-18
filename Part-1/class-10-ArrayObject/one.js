let eid=101;
let ename="Rahul"
let avail=true 
let locs=["Wayanad","New Delhi","Bangalore"]
let emp={
    eid:102,
    ename:"sonai",
    esal:450000
}
document.writeln(eid)
document.writeln(ename)
document.writeln(avail)
document.writeln(locs)
document.write("<br/>")
document.write(emp)
document.write("<br/>")

document.write(JSON.stringify(emp))