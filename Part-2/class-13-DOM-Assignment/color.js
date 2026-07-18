function cc1(){
    document.getElementById('btn1').style.backgroundColor="blue"
}
function cc2(){
    document.getElementById('btn2').style.backgroundColor="blue"
}
function cc5(){
    document.getElementsByClassName('xyz')[0].style.backgroundColor="green"
}

function cc6(){
    let input_Tag=document.getElementsByTagName('input')[1];
    console.log(input_Tag)
    let ename=input_Tag.value;
    console.log(ename)
    input_Tag.value=ename.toUpperCase()
}