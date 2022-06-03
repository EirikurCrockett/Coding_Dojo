//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    let powedNum = 1;
    let sum = 0
    for(i=str.length-1; i >= 0; i--){
        if(str[i] == 1){
            sum += powedNum;
        }
        powedNum*=2;
    }
    return sum;
}

console.log(binToDec("1010101"));
console.log(binToDec("100011"));
console.log(binToDec("100"));
console.log(binToDec("1000"));
console.log(binToDec("1111"));
console.log(binToDec("110101011"));
console.log(binToDec("1111111111"));

//if you have the time, do the opposite! Take in a decimal number and return a
//string with the binary data
const decToBin = (num) => {
    let bin = ""
    while(num > 0){
        // console.log(bin)
        bin = (num%2) + bin
        num -= (num%2)
        num = (num/2);
        // console.log(num)
    }
    // console.log(bin)
    return bin;
}

console.log(decToBin(85));
console.log(decToBin(420));
console.log(decToBin(11));
console.log(decToBin(181));