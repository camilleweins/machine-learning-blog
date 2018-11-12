# Week 2 - Teachable Machine/Transfer Learning

This week we were making a teachable machine. I wanted to train my own data set without using a a webcam. I wanted to see if the machine could tell the difference between a Maine Coon cat and a Racoon. I followed [this](https://ml5js.org/docs/training-introduction) example from the ml5 documentation.

One of the issues I kept having is that ml5 will return an error that it cannot predict null. And the train function needed to be placed in the callback for things to work. I'm sure there's a better way to handle that issue but it was extremely frustrating trying to train the model in the first place. I used the code from this person's [issue](https://github.com/ml5js/ml5-library/issues/185) to debug my own problem.

## Results

!input]
(images/input.png?raw=true)

![result]
(/images/mainecoon.png?raw=true)

![result]
(images/racoon.png?raw=true)

One of the biggest issues is that I am always retraining my model upon refresh, so it would be ideal to implement a save feature and then have that one model loaded every time. I think this would help with the consistency because right now about 60% of the time I have run the program it will label the input image correctly and 40% of the time it won't. Really, my goal was to not use the webcam because my cat didn't want to be my test subject. I also could have added a block that tells the user that the model is being trained instead of needing to watch the console like a hawk.

I'm also not sure why in the console it displays the result label and the training result multiple times?

![console image 1]
(/images/console-msg1.png?raw=true)

![Image of error 2]
(images/console-msg2.png?raw=true)
