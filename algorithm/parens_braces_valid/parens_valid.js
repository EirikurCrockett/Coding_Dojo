// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string


function parensValid(str) {
    // your code here
    var parensOpen = 0
    var parensClose = 0

    for(var i = 0; i < str.length; i++){
        if(str[i] == '('){
            parensOpen++
        }
        else if(str[i] == ')'){
            parensClose++
            if(parensOpen < parensClose){
                return false
            }
        }

    }
    if(parensOpen == parensClose){
        return true
    }
    else{
        return false
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("())()()()()()("));

