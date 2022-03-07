// function d6() {
//     var roll = Math.random();
//     roll = Math.ceil(roll*6)

//     if(roll==0){
//         roll=1;
//     }
//     return roll;
// }

function d6() {
    var roll = Math.random();
    roll = Math.floor(roll*6)
    roll+=1;


    return roll;
}


for(var i = 0; i<100;i++){
    var playerRoll = d6();
    console.log("The player rolled: " + playerRoll);
}

