const isPangram = (str) =>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    for(i = 0; i < chars.length; i++){
        // if(!str.includes(chars[i])){
        //     return false;
        // }
        let boolCheck = false;
        for(j = 0; j < str.length; j++){
            if(str[j] == chars[i]){
                boolCheck = true;
            }
        }
        if(!boolCheck){
            return false;
        }
    }
    return true;
}

const isPerfectPangram = (str) => {
    if(!isPangram(str)){
        return false;
    }
    let newStr = "";
    str = str.toUpperCase();
    for(i =0; i < str.length; i++){
        //"A" = 65, "Z" = 90; every other capital character is in between
        if(str[i] >= "A" && str[i] <= "Z"){
            newStr += str[i]
        }
    }

    if(newStr.length == 26){
        return true;
    } else {
        return false
    }
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));
console.log("\n")
console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
console.log(isPerfectPangram("The five boxing wizards jump quickly."))