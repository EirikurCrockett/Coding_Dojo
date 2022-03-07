var userName = document.querySelector("#userName")
var connectionRequests = [document.querySelector("#conReq1"), document.querySelector("#conReq2")]
var conReqCount = document.querySelector("#conReqCount")
var connections = document.querySelector("#connectionCount")

function changeName(){
    userName.innerText = prompt("Please enter your name:");
}



function addConnection(index){
    connectionRequests[index].remove()

    conReqCount.innerText--;
    connections.innerText++;
    console.log(temp2)
}

function denyConnection(index){
        connectionRequests[index].remove()
    conReqCount.innerText--;
}