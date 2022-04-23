// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

a=["a", "b", "c", "d", "e"];
// we expect to get back...

["e", "d", "c", "b", "a"];

var b = [ ]

function turn(arr) {
    for(i=0; i<a.length; i++){
        b[i]=a[a.length-1-i]
    }
    console.log(b)
    return b
}
turn(a)

function turn2(arr) {
    var b=[]
    for(i=arr.length-1; i>=0; i--){
        b.push(arr[i])
    }
    console.log(b)
    return b
}
turn(a)

//bestpractice

function reverse(arr){  
    for(var i=0; i<arr.length/2;i++){
        var temp=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    return arr
}

a[0],a[4]=a[4],a[0]
console.log(a)