// Write a function that given a sorted array of page numbers, return a string representing a book index. 
// Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"



function bookIndex(arr){
    // your code here
    //array set to the value of arr at index 0
    var tempArr =[arr[0]]
    //empty string to add to it later
    var newStr = ""
    //console.log(arr)
    //loop through our array
    for(var i = 1; i < arr.length; i++){
        //console.log(arr[i])
        //if arr[i] is 1 + the last value of temp arr then we add arr[i] to temp arr
        if(arr[i] - tempArr[tempArr.length-1] == 1){
            tempArr.push(arr[i])
        }
        //if its not then we send our temp array to a function that formats it to our string
        else{
            newStr += `${arrString(tempArr)}, ` 
            //we now set temp arr to only have our current arr[i]
            tempArr = [arr[i]]
        }
    }
    //add the last value(s) remaining in tempArr to our string as our loop doesnt add the last value
    newStr += arrString(tempArr)

    //return the string
    return newStr
}

function arrString(arr){
    var len = arr.length
        //console.log(len)
        //convert the array to a string
        //if we only have on value we only send one value to the string
        if(len == 1){
            return `${arr[0]}`
        }
        //if we have more than one we need the first, last, and a dash
        else{
            return `${arr[0]}-${arr[len-1]}`
        }
}



console.log(bookIndex([1,3,4,5,7,8,10,12])) //1, 3-5, 7-8, 10, 12
console.log(bookIndex([1,3,4,5,7,8,10,11,12])) //1, 3-5, 7-8, 10-12