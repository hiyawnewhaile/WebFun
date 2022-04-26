function changename(){
    var name = document.querySelector(".name")
    name.innerText="Janet Borne"
}

function disappears(element){
    var request = document.querySelector(element);
    var reqs = parseInt(document.querySelector(".number2").innerText);
    var frnds = parseInt(document.querySelector("#frnds").innerText);
    request.remove();
    reqs--;
    document.querySelector(".number2").innerText=reqs;
    frnds++;
    document.querySelector("#frnds").innerText=frnds;
}

function disappears2(element){
    var request = document.querySelector(element);
    var reqs = parseInt(document.querySelector(".number2").innerText);
    request.remove();
    reqs--;
    document.querySelector(".number2").innerText=reqs;
}

// function masterdisappears(element){
//     var request = document.querySelector(element)
//     request.remove()
// }