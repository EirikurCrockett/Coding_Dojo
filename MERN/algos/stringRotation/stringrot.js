
const rotateString = (str, num) => {
    //ex str = "Did I shine my shoes today?"
    //ex num = 30
    //ex2 num = 3
    let start;
    //ex srt.length = 27
    if(num % str.length == 0){
        return str
    }
    //ex 30 % 27 = 3
    //ex2 3 % 27 = 3
    start = num % str.length;
    //ex 27 - 3 = 24
    //ex2 27 - 3 = 24
    start = str.length - start;
    //string.slice(strat, end) end is non-inclusive and optional
    return str.slice(start) + str.slice(0, start);
}

let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 10));

const isRotation = (str1, str2) => {
    if(str1.length != str2.length){
        return false;
    }

    for(let i = 0; i < str1.length; i++){
        const newStr = rotateString(str1, i);
        if(newStr == str2){
            return true
        }
    }
    return false
}

console.log(isRotation("es today?Did I shine my sho", "Did I shine my shoes today?"));
console.log(isRotation("es today?Did I shine my sho", "Did I shine my shoes today? "));
console.log(isRotation("id I shine my shoes today?D", "Did I shine my shoes today?"));