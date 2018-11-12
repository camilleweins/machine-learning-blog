# Week 1 - Style Transfer

I wanted to see if I could make my own filter in the style of this album cover.

I followed this [tutorial](https://github.com/yining1023/styleTransfer_spell/) and everything went well until I got to the part where i needed to actually train my model on Spell. I kept getting this error

![Image of error]
(/images/error1.png?raw=true)

And the issue ended up being that I didn't have a .gitignore in my ckpt directory. It was a very frustrating issue.

Next problem was this

![Another error]
(/images/error2.png?raw=true)

I just ran the same command again and it worked the second time.

When I needed to extract my variables into my model folder I kept getting an error about not being able to import tensorflow in the evaluate.py file. This involved installing tensorflow-python version onto my computer, which ended up being a little more complicated than I expected. In the end, I managed to get everything working and tested some images with my new style.

![yeast]
(/images/nyeast.png?raw=true)

![hiking]
(/images/nhiking.png?raw=true)

![bird]
(/images/nbird.png?raw=true)

![mountains]
(/images/nmountains.png?raw=true)
