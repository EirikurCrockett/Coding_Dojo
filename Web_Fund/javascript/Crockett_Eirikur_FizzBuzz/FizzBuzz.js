/**
 * Eirikur Crockett - 02/25/2020
 * Using what we've learned about loops and conditionals, solve this classic coding challenge (it's been a favorite in interviews for years).
 * Write code that will go through each number from 1 to 100 and:
    For each number that is a multiple of 3, print "Fizz"
    For each number that is a multiple of 5, print "Buzz"
    For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
    All other numbers should just print normally
 */

//USE A FUNCTION
function fizzBuzz(){
    //FOR LOOP TO ITERATE NUMBERS 1 TO 100
    for(var i = 1; i<=100; i++){
        //TEMP VARIABLE JUST SO IM NOT WRITEING OUT MULTIPLE CONSOLE.LOG
        var temp = "";
        //IS i A MULTIPLE OF 3 AND 5?
        if(i%3==0 && i%5==0){
            //IF SO ASIGN FIZZBUZZ TO TEMP
            temp = "FizzBuzz"
        }
        //IF NOT IS IT AT LEAST A MULTIPLE OF 3
        else if(i%3==0){
            //IF SO ASIGN FIZZ TO TEMP
            temp = "Fizz"
        }
        //IF NOT LETS CHECK IF ITS A MULTIPLE OF 5
        else if(i%5==0){
            //IF SO ASIGN BUZZ TO TEMP
            temp = "Buzz"
        }
        //IF ITS NOT A MULTIPL OF EITHER JUST ASIGN THE VALUE OF i TO TEMP
        else {
            temp = i;
        }
        //LOG OUR OUTCOME
        console.log(temp);
    }
}

//CALL OUR FIZZBUZZ FUNCTION
fizzBuzz();