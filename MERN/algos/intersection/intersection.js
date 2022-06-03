const intersect = (arrLeft, arrRight) => {
    let newarray = [];
    // copy data within array
    let temparray = arrRight.slice(0); 
    for(let i = 0; i < arrLeft.length; i++){
        // check to see if temparray includes the value in arrLeft
        if(temparray.includes(arrLeft[i])){
            // indexOf gives the location of the value the we found to be in both arrays
            // + 1 chops off the value that we already checked
            temparray = temparray.slice(temparray.indexOf(arrLeft[i])+1);
            // pushing in value to newarray
            newarray.push(arrLeft[i]);
        }   
    }
    return newarray;
}