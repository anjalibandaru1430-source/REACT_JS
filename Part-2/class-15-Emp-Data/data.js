let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priyana",esal:65000},
    {eid:104,ename:"Modi",esal:75000}
]
function display_Data(){
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
                   </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}