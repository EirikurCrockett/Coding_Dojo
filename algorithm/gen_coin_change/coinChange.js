// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function generateCoinChange(input) {
    var change = input*100
    var quarters = 0
    var dimes = 0
    var nickels = 0
    var pennies = 0

    quarters = ((change - (change%25))/25)
    change = (change - (quarters*25))
    console.log(change)

    
    dimes = ((change - (change%10))/10)
    change = (change - (dimes*10))
    console.log(change)

    nickels = ((change - (change%5))/5)
    change = (change - (nickels*5))
    console.log(change)

    pennies = (change - (change%1))
    change = (change - (pennies))
    console.log(change)




    return(`you get ${quarters} quarters, ${dimes} dimes, ${nickels} nickles, and ${pennies} pennies`)
}
console.log(generateCoinChange(3.21))
