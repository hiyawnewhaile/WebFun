function disappear(element){
    element.remove()
}

function dp(){
    var first=document.querySelector("#first")
    first.remove()
}
function displayv(){
    var fb = document.querySelector("#first").innerText
    alert(fb)
}
function changer(){
    var bye = document.querySelector('#hello')
    bye.innerText="Bye"
}
function colorchg(element){
    element.style.backgroundColor="red"
}
function colorBack(element){
    element.style.backgroundColor="white"
}
function interesting(element,id,str){
    element.style.border="5px solid green"
    var mid = document.querySelector(id)
    mid.innerText=str
}