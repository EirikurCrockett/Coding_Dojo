const clockAngles = (min) => {
    // minMove = 360;
    // hourMove = 30;
    const hours = Math.floor(min/60);
    const minutesR = (min%60);

    const hourHandDeg = ((hours * 30)%360);
    const minHandDeg = (minutesR * 6);
    
    console.log(`\n${hours} hours and ${minutesR} minutes`)
    console.log(`Hour hand: ${hourHandDeg} deg`)
    console.log(`Minute hand: ${minHandDeg} deg`)

    return(Math.abs(hourHandDeg - minHandDeg));
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));