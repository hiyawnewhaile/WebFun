
function crumbs(){
    var cookies = document.querySelector(".cookietime")
    cookies.remove();
}

function f(element){
    // var unit = document.querySelector(".si")
    // var celcius = sdocument.querySelector(".high")
    // document.querySelector(".high")=(high*1.8)+32
    for(var i=1; i<5; i++){
        var temphigh=document.querySelector(".high"+i)
        var templow=document.querySelector(".low"+i)
        if(element.value=="f"){
            temphigh.innerText=Math.round((parseInt(temphigh.innerText)*1.8) + 32)
            templow.innerText=Math.round((parseInt(templow.innerText)*1.8) + 32)
        }
        else{
            temphigh.innerText=Math.round((parseInt(temphigh.innerText-32)/1.8))
            templow.innerText=Math.round((parseInt(templow.innerText-32)/1.8))
        }
    }
}