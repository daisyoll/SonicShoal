let mySound;

function preload() {
  mySound = loadSound('https://raw.githubusercontent.com/daisyoll/SonicShoal/main/Submarine%20Hatch%20Outer%20Open%20Or%20Close%20-%20QuickSounds.com.mp3');
}

function setup() {
  createCanvas(400, 400);
  
  let playButton = createButton('play');
  playButton.position(20, 20);
  playButton.mousePressed(() => {
    if (!mySound.isPlaying()) {
      mySound.play();
    }
  });
}

function draw() {
  background(220);
}
