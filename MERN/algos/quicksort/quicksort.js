
const partition = (arr) => {

    let pivot = arr[0];
    // newArr.push(pivot)
    let pivotLoc = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot && i > pivotLoc) {
            arr.unshift(arr.splice(i, 1)[0])
            pivotLoc++
        }
        else if( i < pivotLoc && arr[i] >=pivot){
            arr.push(arr.splice(i,1)[0]);
            i--;
        }
    }
    // console.log(arr)
    return pivotLoc;
}


const quickSort = (arr) => {
    if(arr.length <= 0){
        return arr;
    }
    let pivotVal = arr[0];
    const pivotIdx = partition(arr)
    // console.log("^Partition^\n");
    let left = arr.slice(0, pivotIdx)
    let right = arr.slice(pivotIdx+1)

    // console.log(left);
    // console.log(right);
    // console.log("^Left & Right^\n");
    left = quickSort(left);
    right = quickSort(right);

    // console.log(left);
    // console.log(right);
    // console.log("^Left & Right: Post QuickSort^\n");
    left.push(pivotVal);
    arr = left.concat(right);

    // console.log(arr)
    // console.log("^Returning^\n");
    return arr;
}
console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]))
console.log(quickSort([1,8,30,5,70,40,60,80,40,50,70,8,7,2,4,6,0,456,82,74,24,0,1,2,3,58,9001]))