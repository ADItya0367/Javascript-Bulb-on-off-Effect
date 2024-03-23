

function clickme(state){
    if(state=="on"){
        document.body.style.backgroundColor = "yellow";
        document.getElementById("myimg").setAttribute("src","yell-removebg-preview.png");
    }
    else {
        document.body.style.backgroundColor = "black";
        document.getElementById("myimg").setAttribute("src","dulll-removebg-preview.png");
    }
}
