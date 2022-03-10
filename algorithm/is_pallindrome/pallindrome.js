// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPallindrome(str) {
    // your code here
    var arr = str.split("")
    //console.log(arr)
    var arr2 = []
    for(var i = arr.length-1; i > -1; i--){
        arr2.push(arr[i])
    }

    for(var j = 0; j<arr.length; j++){
        if(arr[j] != arr2[j]){
            return false
        }
    }
    return true
}

// console.log(isPallindrome("racecar")); // true
// console.log(isPallindrome("e tacocat e"));; // true
// console.log(isPallindrome("Dud"));// false
// console.log(isPallindrome("oho!")); // false
// console.log(isPallindrome(" to ")); // false



// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPallindrome(str) {
    // your code here

    //split string into an array
    var arr = str.split("")
    //console.log(arr)

    //longest holds our longest pallindrome
    var longest = ""
    //loop through our array
    for(var i = 0; i < arr.length; i++){
        //this will hold our characters to me checked
        var newArr = []
        //loop through again starting at the current position of i
        for(var j = i; j<arr.length; j++){
            //[0(i,j),2,3,4,5]
            //[0(i),2(j),3,4,5]
            //[0(i),1,2(j)]
            //add all characters from i to the end of our array into our new array to be checked
            newArr.push(arr[j])
            //we check everytime we add a character to see if we got a pallindrome using isPallindrome(str) from earlier
            //we also are checking to see if our newArr is longer than our current longest
            if(isPallindrome(newArr.join("")) && newArr.join("").length > longest.length){
                //if the we have a pallindrome that is longer than our current one we change the value of longest to our new longest
                longest = newArr.join("")
            }
        }
    }
    //return longest
    return longest
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));
console.log(longestPallindrome("e"));