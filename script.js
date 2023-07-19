window.onscroll=function(){
    scrollFunction()
}
document.getElementById("header").style.height="15vh"
document.getElementById("logo-img").style.height="10vh"

function scrollFunction(){
    console.log(window.pageYOffset)
    if (window.pageYOffset>40){
        document.getElementById("header").style.height="10vh"
        document.getElementById("logo-img").style.height="7vh"

    }
    else{
        document.getElementById("header").style.height="15vh"
        document.getElementById("logo-img").style.height="10vh"


    }
}
document.getElementById("video1").loop=true;