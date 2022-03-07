var arrLikes = [0]
var likes1 = document.querySelector("#likes1")

function like(index){
    arrLikes[index]++;
    likes1.innerText = `${arrLikes[index]} like(s)`
}