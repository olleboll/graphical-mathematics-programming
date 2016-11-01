# graphical-mathematics-programming
Master Thesis

Here lays the source code for my master thesis.

Feel free to download and use it as you please. However, there are some things that need to be done before it works completely.

## Structure
For the application to work properly you need three.js, blockly and closure. These libraries can be found:<br>

- three.js: https://threejs.org/
- blockly : https://github.com/google/blockly
- closure: https://github.com/google/closure-library

Three.js should be placed on level up from the rest of the files in this project.

- src
  - three.js
  - graphical-mathematics-programming (this project)
    - js
    - php
    - htmlfiles
    - blockly
      - closure
      - blockly

You can check the imports in index.html for more details.

## Database

In order to have full functionality with a database. You need to setup the database. The database should look like: http://ollewahl.se/exjobb/databaseimage.html

When the database is in order you need to go into /php/getData.php and fill in your specs for your database on line 84. This so you connect correctly.

## Adding custom blocks

In order to create new blocks use blockfactory (https://blockly-demo.appspot.com/static/demos/blockfactory/index.html). In the blockly folder you need to add code into blockly/blocks/nameofyourfile.js or just add into graphics.js where all blocks for this project are defined. You also need to add code into blockly/generators/nameofyourfile.js or again, into graphics.js.

Block factory gives two segments of code that need to be put in these files respectively. Generators take the actual code that will be performed when the block is used. All block in the project as of now calls a function in handler.js which in turn calls a function that does the actual work. Look at the blocks in blockly/generators/graphics.js and in handler.js to see how they work together. Most blocks end up doing something in objekt.js
