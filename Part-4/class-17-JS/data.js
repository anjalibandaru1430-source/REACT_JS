setInterval(function(){
    let ct = new Date().toLocaleTimeString();
    document.getElementById('abc').textContent = ct;
}, 1000);