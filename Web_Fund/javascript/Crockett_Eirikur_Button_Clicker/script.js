var count1 = 0;

var count2 = 0;

function loginOut(element){
    if(element.innerText === "Login"){
        element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }
}

function likes(element, check){
    alert('ninja was liked')
    if(check == 1){
        count1++
        element.innerText = (`${count1} likes`)
    }
    else if(check == 2){
        count2++
        element.innerText = (`${count2} likes`)
    }

}

function hide(element){
    element.remove()
}