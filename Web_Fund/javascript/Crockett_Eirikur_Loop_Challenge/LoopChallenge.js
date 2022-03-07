/**
 * Eirikur Crockett - 2/25/2022
 * 
 * 
    Print odds 1-20
        Using a loop write code that will console.log all of the odd values from 1 up to 20.
    Decreasing Multiples of 3
        Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
    Print the sequence
        Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
    Sigma
        Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
    Factorial
        Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
 */

//im going to use functions for all of these
function odds1to20(){
    //for loop, for easy iteration
    for(var i = 1; i<=20; i++){
        //we want to check to make sure that the number is NOT even
        if(i%2 != 0){
            //if so, log i
            console.log(i);
        }
    }
}
//function call
odds1to20();


function decreasingMultiples3(){
    //very similar to the last one, just backwards with a greater range
    for(var i = 100; i>0; i--){
        //we want to check to make sure that the number is a multiple of 3 spcifically
        if(i%3 == 0){
            //if so, log i
            console.log(i);
        }
    }
}
//function call
decreasingMultiples3();

function printSequence(){
    //log this sequence 4, 2.5, 1, -0.5, -2, -3.5 to console
    //counting down by 1.5 form 4 down to -3.5 inclusive
    for(var i = 4; i>-4; i-=1.5){
        //log i
        console.log(i)
    }
}

//cal function
printSequence();

//log the sum of all number 1-100
function sigma(){
    //var to hold our sum
    var sum = 0
    //count up to 100 from 1
    for(var i = 0; i<=100; i++){
        //add every number to sum
        sum+=i;
    }
    //log sum
    console.log(sum);
}

sigma();

//log the product of all numbers 1 to 12 inclusive
function factorial(){
    //var to hold out product
    //set product to 1 since we are multiplying
    var product = 1
    for(var i = 1; i<=12;i++){
        product*=i;
    }
    console.log(product);
}

factorial();