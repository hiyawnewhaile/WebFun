// 9.51

// Math.ceil(9.51)
// Math.ceil(9.1)

// Math.floor(8.45)
// Math.floor(8.99)

// ///Generating a random number
// for(var i=0; i<10; i++){
//     var random = Math.floor(Math.random() * 11 +1);
//     console.log(random)
// }

// function d6() {
//     var roll = Math.floor(Math.random() * 6 + 1);
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle(){
    var life = Math.floor(Math.random() * lifesAnswers.length)
    return life 
}
oracleans=oracle()
console.log(lifesAnswers[oracleans])
