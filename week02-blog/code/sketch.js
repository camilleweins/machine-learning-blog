let features;
let classifier;
// let video;
let loss;
let inputImg;

function setup() {
     noCanvas;

     features = ml5.featureExtractor('MobileNet', modelLoaded);

     classifier = features.classification();
     inputImg = select('#inputImg');

     // video = createCapture(VIDEO);
     // // Append it to the videoContainer DOM element
     // video.parent('videoContainer');

     // video = createCapture(VIDEO);
     // video.parent('videoContainer');

     classifier.addImage(document.getElementById('racoonImg1'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg2'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg3'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg4'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg5'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg6'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg7'), 'Racoon', imageAdded);
     classifier.addImage(document.getElementById('racoonImg8'), 'Racoon', imageAdded);

     classifier.addImage(document.getElementById('mainecoonImg1'), 'Maine Coon', imageAdded);

     classifier.addImage(document.getElementById('mainecoonImg2'), 'Maine Coon', imageAdded);

     classifier.addImage(document.getElementById('mainecoonImg3'), 'Maine Coon', imageAdded);
     classifier.addImage(document.getElementById('mainecoonImg4'), 'Maine Coon', imageAdded);
     classifier.addImage(document.getElementById('mainecoonImg5'), 'Maine Coon', imageAdded);
     classifier.addImage(document.getElementById('mainecoonImg6'), 'Maine Coon', imageAdded);
     classifier.addImage(document.getElementById('mainecoonImg7'), 'Maine Coon', imageAdded);
     classifier.addImage(document.getElementById('mainecoonImg8'), 'Maine Coon', imageAdded);
}

function imageAdded() {
     console.log("Image added");
     classifier.train(function(lossValue) {
          if (lossValue) {
            loss = lossValue;
            console.log('Loss: ' + loss)

          } else {
               classify();
               console.log('Done Training! Final Loss: ' + loss)
          }
     });
}

function classify() {
  classifier.classify(inputImg, gotResults);

}

function maineCoonLoaded() {
     console.log('load maine coon');
}

function racoonLoaded() {
     console.log('load racoon');
}

function modelLoaded() {
 console.log('Model Loaded!');
}

function gotResults(error, result) {
     if (error) {
         console.log(error);
    } else {
         select('#result').html(result);
         console.log(result);
         // select('#confidence').html(probability);
         //classify();

    }
}

// Triggers when the video is ready
// function videoReady() {
//  console.log('The video is ready!');
// }
