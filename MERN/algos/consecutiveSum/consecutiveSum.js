const findConsecutiveSums = (nums, targetSum) => {
    let sumsArr = [];
    //iterate through nums with i as our starting point for slice later on
    for(let i = 0; i < nums.length; i++){
        //new sum to add values into
        let newSum = 0
        //iterate trhough the array starting at i
        for(let j = i; j < nums.length; j++){
            //adding in every value until the end one by one
            newSum += nums[j];
            
            //if at any point we have a matching sum
            if(newSum == targetSum){
                //add all the values we needed to get that sum
                sumsArr.push(nums.slice(i, j+1))
            }
        }
    }
    //return our array of arrays of numbers
    return sumsArr;
}



const printConsecutiveSums = (nums, sum) => {
    const sumsArr = findConsecutiveSums(nums, sum);
    console.log(`Numbers: ${nums} \nSum: ${sum} `);
    if(sumsArr.length > 0){
        for(i=0; i<sumsArr.length; i++){
            console.log(`${i+1}: ${sumsArr[i]}`)
        }
    } else {
        console.log(`There are no consecutive sums for ${sum} in this array`)
    }

}


const nums1 = [2, 5, 3, 6, 7, 23, 12, 20, -4];
const sum1 = 16;
printConsecutiveSums(nums1,sum1);
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];
console.log("")
const nums2 = [];
const sum2 = 5;
printConsecutiveSums(nums2,sum2)
// const expected2 = [];
console.log("")
const nums3 = [10, -5, 15, 20, 35, 30];
const sum3 = 5;
printConsecutiveSums(nums3,sum3)
// const expected3 = [];
console.log("")
// Bonus:
const nums4 = [2, 5, 3, 6, 7, -7, 0, 23, 12,-35];
const sum4 = 16;
printConsecutiveSums(nums4,sum4)
// const expected4 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ];