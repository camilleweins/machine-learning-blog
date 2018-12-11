// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
//let isPlaying = false;
//let song;
//const squareSize = 160;

// function preload() {
//   song = loadSound('assets/song.mp3');
// }

function setup() {
  createCanvas(640, 480);
  // frameRate(5);
  video = createCapture(VIDEO);
  video.size(width, height);
  stroke(255);
  line(0, 250, 640, 250);
  line(width/2, 0, width/2, 700);

  strokeWeight(4);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, 'single', modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  // Flip the video from left to right, mirror the video
  translate(width, 0)
  scale(-1, 1);
  image(video, 0, 0, width, height);

  // if (isPlaying) {
  //   fill(0, 255, 0);
  //   // .isPlaying() returns a boolean
  //   // If the song is not playing, play the song
  //   if (!song.isPlaying()) {
  //     song.play();
  //   }
  // } else {
  //   fill(255, 0, 0);
  //   // .isPaused()() returns a boolean
  //   // If the song is not paused, pause the song
  //   if (!song.isPaused()) {
  //     song.pause();
  //   }
  //}
  noStroke();
  // Draw a 50 x 50 sqaure at the center of the canvas
  // rect(width / 2 - squareSize / 2, height / 2 - squareSize / 2, squareSize, squareSize);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];

      let rShoulderX = pose.keypoints[5].position.x;
      let rShoulderY = pose.keypoints[5].position.y;
      let lShoulderX = pose.keypoints[6].position.x;
      let lShoulderY = pose.keypoints[6].position.y;


      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(0, 0, 255);
        noStroke();
        ellipse(round(lShoulderX), round(lShoulderY), 30);
        ellipse(round(rShoulderX), round(rShoulderY), 30);

        stroke(255);
        line(0, height/2, rShoulderX+200, height/2);
          line(width/2, 0, width/2, 700);
        //line(lShoulderX, lShoulderY, rShoulderX, rShoulderY);
        // ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
      // keypoint[0] is the nose point
      // Only check the first pose
      // if (i === 0 && j === 0) {
      //   ellipse(keypoint.position.x, keypoint.position.y, 30, 30);
      //   // checkIfPlay(keypoint.position);
      // }
    }
  }
}

// function checkIfPlay(position) {
//   const halfSize = squareSize / 2;
//   // Check if the position is inside of the square
//   if (position.x >= width / 2 - halfSize && position.x <= width / 2 + halfSize &&
//       position.y >= height / 2 - halfSize && position.y <= height / 2 + halfSize
//   ) {
//     isPlaying = true;
//   } else {
//     isPlaying = false;
//   }
// }

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(0, 255, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      strokeWeight(7);
    }
  }
}