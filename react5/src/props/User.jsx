import Emp from "./Emp";
let user=()=>{
    let ename="John Doe";
    let gender="Male";
    let esal=50000;


    return <div>
        <h2>User Component</h2>
        <hr/>
        <Emp ename={ename} gender={gender} esal={esal}/>
    </div>
}
export default user;