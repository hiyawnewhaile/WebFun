var age = 10
var ishappy = true
function five(age){
if(age!= 5){
    console.log('not 5')
}
}
five(age)

function checkage(age){
    if(age > 16){
        console.log('you can borrow my keys')
    }
    else if(age < 6){
        console.log('sorry, I dont have a tricycle')
    }
    else{
        console.log('you can borrow my bike') 
    }
}

checkage(age)
checkage(5)

