function display(){
    //alert("Test Case 123")
    let p_Tag=document.getElementById('abc');
    console.log(p_Tag);
    p_Tag.innerHTML=new Date().toLocaleString();
    //p_Tag.innerHTML=new Date().toLocaleTimeString();
    //p_Tag.innerHTML=new Date().toLocaleDateString()
    //p_Tag.innerHTML="GM"
}