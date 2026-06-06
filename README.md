# morse-code-microbit
morse code extension for microbit

## How to use
Make the extension.
  1. Switch from Blocks to JavaScript at the top of your screen.
  2. Open the Explorer on the left and click on the +.
  3. Name it Morse.ts.
  4. Replace every thing with the code from code.ts.
  5. If you replaced it go back to the plock code

Setup Button A (For Dots)
  1. Click on the pink Input category on the left.
  2. Drag the on button A pressed block onto your workspace.
  3. Click on your teal Morse Code category.
  4. Drag the add dot block and snap it inside the Button A block.

Setup Button B (For Dashes)
  1. Go back to the pink Input category.
  2. Drag another on button A pressed block onto your workspace.
  3. Click the little arrow next to the A on this new block and change it to B (it will become on button B pressed).
  4. Go to Morse Code and drag the add dash block inside the Button B block.

Setup the Forever Loop (For Translating)
Now look at the blue forever loop that is already on your screen:
  1. Click on the light blue Logic category.
  2. Drag an if/then block and place it inside the forever loop.
  3. Go back to Logic, grab the ... and ... block, and snap it into the opening right next to the if.
  4. Click on Morse Code, grab has untranslated code, and snap it into the first slot of the and block.
  5. Go back to Logic, grab a comparison block (0 < 0), and snap it into the second slot of the and block. Click the < symbol and change it to > (greater than).
  6. Click on Morse Code, grab time since last input, and place it on the left side of your > comparison.
  7. Click the right side of the comparison and type 1000 (this represents a 1-second pause).
  8. Finally, click on the blue Basic category, drag a show string "Hello" block, and place it inside the then section.
  9. Click on Morse Code, grab the round translate morse code block, and drop it right over the text "Hello".
