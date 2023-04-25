console.log('Welcome to Music Player');
let songs = [
    { songName: "Janji - Heroes Tonight (feat. Johnning) [NCS ReleaseIshq", filepath: "1.mp3" },]

let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');


let audioElement = new Audio('1.mp3');
// audioElement.play();

// handle the buttons //
masterplay.addEventListener('click', () => {
    if (audioElement.paused && audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;



    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

        
        

    }

})

// progressing the bar //
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update the progress //
    progress = parseInt((audioElement.currentTime/audioElement.duration * 100));
    console.log(progress);
    myprogressbar.value = progress
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
