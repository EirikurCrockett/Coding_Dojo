const encode = (str) => {
    let count = 1;
    let currentChar = str[0]
    let newStr = "";
    for(i = 1; i < str.length; i++){
        if(str[i] == currentChar){
            count++;
        } else{
            newStr += (currentChar + count);
            currentChar = str[i];
            count = 1;
        }
    }
    newStr += (currentChar + count);
    return newStr;
}

const decode = (str) => {
    let newStr = "";
    let currentChar = str[0];
    let countStr = "";
    for(i = 1; i < str.length; i++){
        // console.log("Test1")
        if(!Number.isNaN(parseInt(str[i]))){
            // console.log("Test")
            countStr += str[i]
        }
        else {
            // console.log(countStr)
            for(j = parseInt(countStr); j > 0; j--){
                // console.log("Test5")
                newStr += currentChar;
            }
            currentChar = str[i];
            countStr = "";
        }   
    }
    // console.log(countStr)
    for(i = parseInt(countStr); i > 0; i--){
        // console.log("Test3")
        newStr += currentChar;
    }
    // console.log(countStr)
    return newStr;
}

console.log(encode("aaabbcccc"))
console.log(decode("a30b15c10"))
// decode("a30b15c10")