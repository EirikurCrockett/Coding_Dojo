var arr2d = [[2, 5, 8], [3, 6, 1], [5, 7, 7]];


//determine if a certain value was present
function isPresent2d(arr, value){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j< arr[i].length; j++){
            if(arr[i][j]==value){
                return true
            }
        }
    }
    return false
}
console.log(isPresent2d(arr2d, 2))

function flatten(arr){
    var tempArr = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j< arr[i].length; j++){
            tempArr.push(arr[i][j])
        }
    }
    return tempArr
}

console.log(flatten(arr2d))