console.log("page loaded...");

var video = document.getElementById("video")
var preview = true;

function playPreview(){
    if(preview==true){
        video.muted = true;
        video.currentTime = 0;
        video.play();
    }
}

function stopPreview(){
    if(preview==true){
        video.currentTime = 0;
        video.pause();
    }
}



function startStop(){
    if(preview == true){
        preview = false;
        video.pause();
        video.muted = false;
    }
    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
}