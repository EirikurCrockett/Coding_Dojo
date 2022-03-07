var arrLikes = [[document.querySelector("#likes1"),0],[document.querySelector("#likes2"),0],[document.querySelector("#likes3"),0]]

function like(index, index2){
    arrLikes[index][1]++;
    arrLikes[index][0].innerText = `${arrLikes[index][1]} like(s)`
}