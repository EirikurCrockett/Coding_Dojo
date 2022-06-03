const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;

const str4 = "dda";
const expected4 = true;

const str5 = "aaadd";
const expected5 = true;

const str6 = "abc";
const expected6 = false;

const canStringBecomePalindrome = (str) => {
    if(str.length == 0){
        console.log("{ Empty }")
        return false;
    }
    let characters = {}
    for(i = 0; i < str.length; i++){
        if(str[i] in characters){
            characters[str[i]]++;
        } else{
            characters[str[i]] = 1;
        }
    }
    console.log("\n",characters);
    let ones = 0
    let otherOdds = 0
    for(const key in characters){
        if(characters[key] == 1){
            ones++;
        } else if (characters[key] % 2 == 1){
            otherOdds++;
        }
    }
    // console.log(ones, otherOdds)
    if(ones <= 1 && otherOdds == 0){
        return true;
    } else if (ones == 0 && otherOdds <= 1){
        return true;
    } else {
        return false;
    }
}
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
