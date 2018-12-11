let img;

let poseNet;
let poses = [];

function setup() {
    createCanvas(800, 800);

    // create an image using the p5 dom library
    // call modelReady() when it is loaded
    img = createImg('images/pose.jpg', imageReady);

    img.size(250, 250);

    //img.hide(); // hide the image in the browser
    //frameRate(1); // set the frameRate to 1 since we don't need it to be running quickly in this case
}

// when the image is ready, then load up poseNet
function imageReady(){
    // set some options
    let options = {
        imageScaleFactor: 0.2,
        minConfidence: 0.1,
        flipHorizontal: false

    }
    
    // assign poseNet
    poseNet = ml5.poseNet(modelReady, options);
    // This sets up an event that listens to 'pose' events
    poseNet.on('pose', function (results) {
        poses = results;
    });
}

// when poseNet is ready, do the detection
function modelReady() {
    select('#status').html('Model Loaded');
     
    // When the model is ready, run the singlePose() function...
    // If/When a pose is detected, poseNet.on('pose', ...) will be listening for the detection results 
    // in the draw() loop, if there are any poses, then carry out the draw commands
    poseNet.singlePose(img)
}

// draw() will not show anything until poses are found
function draw() {
      // let matt = createImg('images/pose.jpg');
      // const pose = estimatePoseOnImage(matt);

        //image(img, 0, 0);

    if (poses.length > 0) {
          //image(img, 0, 0,);    

        //drawSkeleton(poses);
        drawKeypoints(poses);
        noLoop(); // stop looping when the poses are estimated
    }

}

// The following comes from https://ml5js.org/docs/posenet-webcam
// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
    // Loop through all the poses detected
  //   for (let i = 0; i < poses.length; i++) {
  //       // For each pose detected, loop through all the keypoints
  //       let pose = poses[i].pose;

  //       let lShoulder = pose.keypoints[5];
  //    let rShoulder = pose.keypoints[6];

  //       //console.log(lShoulder);
  //       //console.log(rShoulder);

    // //if (keypoint.score > 0.2) {
  //       fill(255);
  //       stroke(20);
  //       strokeWeight(4);
  //       ellipse(round(lShoulder.position.x), round(lShoulder.position.y), 8, 8);
  //       ellipse(round(rShoulder.position.x), round(rShoulder.position.y), 8, 8);

    // //}

  //       for (let j = 0; j < pose.keypoints.length; j++) {
  //                //console.log([pose[5]]);

  //           // A keypoint is an object describing a body part (like rightArm or leftShoulder)
  //           let keypoint = [pose.keypoints[j]];
  //            //console.log(pose.keypoints[5]);


  //            //console.log(lShoulder);

  //           //let  keypointArray = [];
  //           //keypointArray = keypoint;
  //           //console.log(keypointArray);

  //           // for (let k = 0; k < keypoint.length; k++){
  //           //   let lShoulder = keypoint[5].part;
  //           //   console.log(lShoulder);
  //           // }


  //           //console.log(keypoint.part);
  //           // Only draw an ellipse is the pose probability is bigger than 0.2

  //           // if (keypoint.score > 0.2) {
  //           //     fill(255);
  //           //     stroke(20);
  //           //     strokeWeight(4);
  //           //     ellipse(round(lShoulder.position.x), round(lShoulder.position.y), 8, 8);
  //           //     ellipse(round(rShoulder.position.x), round(rShoulder.position.y), 8, 8);

  //           // }
  //       }
  //   }
  if (poses.length > 0) {
  if (poses[0].pose.keypoints[5].score > 0.2 && poses[0].pose.keypoints[6].score) {

      let lShoulderX = poses[0].pose.keypoints[5].position.x;
      let lShoulderY = poses[0].pose.keypoints[5].position.y;
      let rShoulderX = poses[0].pose.keypoints[6].position.x;
      let rShoulderY = poses[0].pose.keypoints[6].position.y;
      fill(255, 0,0);
      //console.log(poses[0].pose.keypoints[5]);
      ellipse(round(lShoulderX), round(lShoulderY), 10);
      ellipse(round(rShoulderX), round(rShoulderY), 10);

      stroke(0);
      strokeWeight(1);
      let v1 = createVector(lShoulderX, lShoulderY,0);
      let v2 = createVector(rShoulderX, rShoulderY,0);
      var angle = v1.angleBetween(v2);
      console.log(angle);
      line(rShoulderX*10, rShoulderY-10, rShoulderX, rShoulderY-10)
      line(lShoulderX, lShoulderY, rShoulderX, rShoulderY);
  }

  }

}

// A function to draw the skeletons
function drawSkeleton() {
  //console.log(poses[0].skeleton[1]);
    // Loop through all the skeletons detected
  //   for (let i = 0; i < poses.length; i++) {
  //       let skeleton = poses[i].skeleton;
  //           //console.log(poses[i].skeleton);
  //           //console.log(poses[1].skeleton);
  //           //console.log(poses[6].skeleton);
    // let partA = skeleton[1][1]
    // let partB =  skeleton[6][1];
    // stroke(0);
    // strokeWeight(1);
    // line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
            //console.log(skeleton[1][1]);
            //console.log(skeleton[6][1]);

        // For every skeleton, loop through all body connections
        // for (let j = 0; j < skeleton.length; j++) {
        //  //console.log(skeleton[j]);
        //     let partA = skeleton[j][0];
        //     let partB = skeleton[j][1];
        //     stroke(0);
        //     strokeWeight(1);
        //     line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        // }
    //}
}