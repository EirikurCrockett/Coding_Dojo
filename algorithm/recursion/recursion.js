// // What is Recursion?
// // Basically: when a function calls itself within itself


// // Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// // Ex: given 5 would return 1+2+3+4+5 == 15
// // Ex: given 2.5 would return 1+2 == 3

// function sigma(num) {
//     var sum = 0
//     for (i = 0 ; i <= num ; i ++) {
//         sum += i
//     }
//     return sum
// }

// function recursiveSigma(num) {
//     if (num == 0) {
//         return 0
//     } else {
//         return num + recursiveSigma(num - 1)
//     }
// }

// recursiveSigma(5)

// // ========================================================
// // Recursive Factorial
// // ========================================================

// // Write a drecursive function that, given a number, returns the product of integers up to a given number
// // Ex: given 4 would return 1*2*3*4 == 24
// // Ex: given 3.5 would return 1*2*3 == 6 

// function recursiveFactorial(num) {
//     if (num == 0 || num == 1){
//         return 1
//     }
//     else{
//         return num * recursiveFactorial(num -1)
//     }
// }

// console.log(recursiveFactorial(100));

// // ========================================================
// // Recursive Fibonacci
// // ========================================================

// // Given a number, add the collective sum up to that number (using Fibonacci sequence)

// // F0   F1   F2   F3   F4   F5   F6   F7    F8    F9    F10    
// // 0    1    1    2    3    5    8    13    21    34    55    

// function recursiveFibonacci(num) {
//     if(num == 0){
//         return 0
//     } else if(num == 1){
//         return 0 + 1
//     } else{
//         return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
//     }
// }

// console.log(recursiveFibonacci(10))
// console.log(recursiveFibonacci(9))
// console.log(recursiveFibonacci(8))
// console.log(recursiveFibonacci(7))
// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(5))
// console.log(recursiveFibonacci(4))
// console.log(recursiveFibonacci(3))
// console.log(recursiveFibonacci(2))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(0))


// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

function recursiveGreatestCommonFactor(num1,num2){
    // your code here
    console.log(num1, num2)
    if (num1 == num2){
        return num1
    } else if( num1 > num2 && num1 % num2 != 0) {
        return recursiveGreatestCommonFactor(num1 % num2, num2)
    } else if(num1 > num2 && num1 % num2 == 0){
        return num2
    } else if( num2 > num1 && num2 % num1 != 0) {
        return recursiveGreatestCommonFactor(num1, num2 % num1)
    } else if( num2 > num1 && num2 % num1 == 0) {
        return num1
    }
}

console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5
console.log(recursiveGreatestCommonFactor(102,1000)); // 2
console.log(recursiveGreatestCommonFactor(7,13)); // 1

console.log(recursiveGreatestCommonFactor(123456,987654)); // 6

