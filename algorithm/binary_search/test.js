function recursiveBinarySearch(val, arr, start_index, end_index) {
    midpoint = Math.floor((start_index + end_index) / 2)
    console.log( midpoint, arr)
    if (start_index == end_index && arr[start_index] != val) {
        console.log(-1)
        return -1
    }

    if (arr[midpoint] == val) {
        console.log(midpoint)
        return midpoint
    } else if (arr[midpoint] > val) {
        end_index = midpoint
        recursiveBinarySearch(val, arr, start_index, end_index)
    } else if (arr[midpoint] < val) {
        start_index = midpoint + 1
        recursiveBinarySearch(val, arr, start_index, end_index)
    } 
    
}


recursiveBinarySearch(3, [-1, 0, 1, 2, 2, 3, 4, 5], 0, 6)