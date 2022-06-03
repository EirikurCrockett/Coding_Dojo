const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

const dropIt = (arr, callback) => {
    // console.log(arr)
    for(i=0; i< arr.length; i++){
        if(!callback(arr[i])){
            // console.log(arr[i])
            arr.shift();
            i--;
        } else{
            break;
        }
    }
    return arr;
}

console.log(dropIt([...nums1], callback1));
console.log(dropIt([...nums2], callback2));
console.log(dropIt([...nums3], callback3));