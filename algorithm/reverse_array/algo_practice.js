//reverse an array

function reverse(arr){
    var newArr = [];
    for(var i = arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverse(["a", "b", "c", "d", "e"]))