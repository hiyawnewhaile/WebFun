//1
function dub(){
    for(var i=0; i<=20; i++){
        if(i%2==1){
            console.log(i)
        }
    }
}
dub()

//2
function tres(){
    for( var i=100; i>=0; i--){
        if(i%3==0){
            console.log(i)
        }
    }
}
tres()

//3
function seq(){
    for( var i=4; i>=-3.5; i-=1.5){
        console.log(i)
    }
}
seq()

//4
var x=0
function sigma(){
    for(i=1; i<=100; i++){
            x+=i
        console.log(x)
    } 
}   
sigma()

//5
var x=1
function factorial(){
    for(i=2; i<=12; i++){
            x*=i
        console.log(x)
    } 
}   
factorial()

