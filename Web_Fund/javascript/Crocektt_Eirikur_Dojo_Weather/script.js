function hide(id){
    var element = document.querySelector(id);
    element.remove();
}

function loading(){
    alert("Loading weather report...")
}


var tempIn = "C";

function tempConvert(){
    if(tempIn == "C"){
        tempInF()
    }
    else{
        tempInC()
    }
}

function tempInC(){
    tempIn = "C"
        for(var i = 1; i<=8; i++){
            var temp1 = document.querySelector(".temp" + i)
            var temp2 = parseInt(temp1.innerText)
            console.log(temp2)
            temp1.innerText = Math.round(((temp2 -32)/1.8))
        }
}

function tempInF(){
    tempIn = "F"
    for(var i = 1; i<=8; i++){
        var temp1 = document.querySelector(".temp" + i)
        var temp2 = parseInt(temp1.innerText)
        console.log(temp2)
        temp1.innerText = Math.round((temp2 * 1.8 + 32))
    }
}