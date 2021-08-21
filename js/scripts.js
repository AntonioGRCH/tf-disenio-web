function reproducir(){
    var miaudio = document.getElementById("miaudio");
    console.log(miaudio);
    miaudio.play();
    
}

function pausar(){
    var miaudio = document.getElementById("miaudio");
    console.log(miaudio);
    miaudio.pause();

}

function detener(){
    var miaudio = document.getElementById("miaudio");
    miaudio.pause();
    miaudio.currentTime = 0;
}

function pausarDetener(){
    var miaudio = document.getElementById("miaudio");
     if(miaudio.paused){
        miaudio.play();
    }
    else{
        miaudio.pause();
    }
}