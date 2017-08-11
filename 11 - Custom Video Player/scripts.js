const play = document.querySelector('.player__button');
const video = document.querySelector('.player__video');
const progressFill = document.querySelector('.progress__filled');

let playVid = false;
const progress = 0;
progressFill.style.flexBasis = progress;
play.addEventListener('click', handlePlay);

function handlePlay() {
  playVid = !playVid;

  if(playVid){
    video.play();
    play.innerHTML='||';


    setInterval(function () {
      const playTime = video.currentTime / video.duration * 100 + '%';

      progressFill.style.flexBasis = playTime;
    }, 500);



  } else {
    video.pause();
    play.innerHTML='&#9658;';
  }
}

//Volume
const volSlider = document.querySelector('input[name=volume]');

video.volume = volSlider.value;

function handleVol() {
  video.volume = volSlider.value;
}
volSlider.addEventListener('click', handleVol);
volSlider.addEventListener('mousemove', handleVol);


//play rate
const speedSlider = document.querySelector('input[name=playbackRate]');

video.playbackRate = speedSlider.value;

function handleSpeed() {
  video.playbackRate = speedSlider.value;
}
speedSlider.addEventListener('click', handleSpeed);
speedSlider.addEventListener('mousemove', handleSpeed);

//skip 10secs
const skipTen = document.querySelectorAll('.skip');

skipTen.forEach(test =>
test.addEventListener('click', speed));

function speed() {
  if(this.dataset.skip === '-10') {
    video.currentTime = video.currentTime - 10;
  }
  if(this.dataset.skip === '25') {
    video.currentTime = video.currentTime + 25;
  }
}
