function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function navegacao(x){
    if (x===1){
        document.getElementById("cadastro").style.display="block";
        document.getElementById("login").style.display="none";
    }

    else if (x===2){
        document.getElementById("cadastro").style.display="none";
        document.getElementById("login").style.display="block";
    }
}