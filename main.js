const video = document.getElementById("vid")
const audio = document.getElementById("aud")
const str = document.getElementById("play")

let number = getElementById("volume-control")
number.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
    })


function stop(){
    if(str.innerHTML==="Play"){
    video.play()
    audio.play()
    str.innerHTML="Stop"
    }
    else{
        video.pause()
        audio.pause()
        str.innerHTML="Play"
}
}