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
    return
}

turn(a)

a[0],a[4]=a[4],a[0]
console.log(a)