//given a string of words(with spaces),
//return an array of words
//spaces are considered the separation between words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let tempArr = [];
    let newArr = [];
    for(i=0;i<str.length;i++){
        if(str[i] != " "){
            tempArr.push(str[i])
        } else if(tempArr.length > 0){
            newArr.push(tempArr.join(""))
            tempArr = [];
        }
    }
    if(tempArr.length > 0){
        newArr.push(tempArr.join(""))
    }

    return newArr;
}

const reverseWordOrder = (str) => {
    return stringToWordArray(str).reverse().join(" ");
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));