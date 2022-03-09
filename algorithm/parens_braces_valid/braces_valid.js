// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true
    
// hint: consider using an array or object to solve

function bracesValid(str) {
    // your code here
    newArr = str.split("")
    //console.log(newArr)
    //base length of newArr
    var len = newArr.length
    //object with to associate our openers to our closer
    var brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
        ')': '(',
        ']': '[',
        '}': '{'
    }

    //for loop to remove an characters that arent parentheses, braces or brackets
    for(var i = 0; i < len; i++){
        //check to see if the character is defiend in our brackets object
        if(brackets[newArr[i]] == undefined){
            newArr.splice(i, 1)
            //decrement len and i so we dont go out of index range
            len--
            i--
        }
    }
    //counters for our openers and closer
    var countBracketsOpen = {
        '(': 0,
        '[': 0,
        '{': 0
    }
    var  countBracketsClose = {
        ')': 0,
        ']': 0,
        '}': 0
    }

    //object to assocate specifically closing brackets to opening, but not opening to closing
    var bracketsClosed = {
        ')': '(',
        ']': '[',
        '}': '{'
    }


    // this chunk is my solution for the last check "{(})"
    //loop through our array
    for(var j = 0; j < len; j++){
        //we are looking for a closing bracket 
        if(bracketsClosed[newArr[j]] != undefined){
            //start counting backwards now
            for(var k = j; k > -1; k--){
                //we are looking for an opening bracket that matches our closing
                if(newArr[k] == bracketsClosed[newArr[j]]){
                    //once found we want to clear all values between the opening and closing brackets
                    var temp = j-k+1 //temp holds the length of the values we are removing from newArr
                    var tempArr = newArr.splice(k, temp)
                    if(tempArr.length > 2){
                        return false
                    }
                    
                    //decrement j and len equal to the number of values we removed form newArr
                    j-=temp
                    len-=temp
                    break
                }
                //console.log(newArr)
            }
            
        }
    }


    //for loop to iterate through our newArr
    for(var j = 0; j < len; j++){
        //check to make sure that the value at newArr[j] is in our bracketsOpen object
        if(countBracketsOpen[newArr[j]] != undefined){
            countBracketsOpen[newArr[j]] += 1
        }
        //check to make sure that the value at newArr[j] is in our bracketsClose object
        else if(countBracketsClose[newArr[j]] != undefined){
            countBracketsClose[newArr[j]] += 1
            //check to make sure something like this ->> ()) isnt being passed as valid
            if(countBracketsOpen[brackets[newArr[j]]] < countBracketsClose[newArr[j]]){
                return false
            }
        }
    }
    //check to make sure every opener has a closer
    if((countBracketsOpen['('] == countBracketsClose[')']) && (countBracketsOpen['['] == countBracketsClose[']']) && (countBracketsOpen['{'] == countBracketsClose['}'])){
        return true
    }
    //if not then its false
    else{
        return false
    }

}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));
console.log(bracesValid("({(})")); // false

