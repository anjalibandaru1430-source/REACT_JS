let goToMovie = (success,failure)=>{
    let acc_bal = 2100;

    if(acc_bal>=500){
        success("Go to enjoy")
    }
    else{
        failure("Go to pg")
    }
}
goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})