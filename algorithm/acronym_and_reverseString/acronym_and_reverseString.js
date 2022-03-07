// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized) in string form.
// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

// Things to consider: how to move through a string? How to capitalize letters? how to create/add to a new string?


function acronym(str) {
    // temp var to hold our string initialized to our first character
    var temp = str[0]
    //for loop to iterate through our string
    for(var i = 1; i < str.length; i++){
        //if we come to blank space, we know to add the next character to our string
        //make sure the the space isnt our last character
        if(str[i]==" " && i < str.length-1){
            //add the next char
            temp += str[i+1]
        }
    }
    //return our acronym in all caps
    return temp.toUpperCase()
}

//call function
console.log(acronym("there's no free lunch - gotta pay yer way"));


// ==================================================================================================================
// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.
// Example: "creature" ---> "erutaerc"
// ** Don't use the built-in reverse() method!

function reverseString(str) {
    //declare and initialize an empty string
    var temp = ""
    //for loop set to start at teh end of our string
    //iterate backwards through it using i--
    for( var i = str.length-1; i >= 0; i--){
        //add the char at [i] to our temp string
        temp += str[i]
    }
    //return our temp string
    return temp
}

//call it; i added soem string interpolation 
console.log(`creature backwards is ${reverseString("creature")}`)
