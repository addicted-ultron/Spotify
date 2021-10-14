console.log("Welcome to Spotify Clone Webapp")

//Initialise the variables used
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');


let songs= [
    {songName:"a", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"b", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"c", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"d", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"e", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"f", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"g", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"h", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"i", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"j", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}

]

//Handle play pAUSE cLICK

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to Event

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})