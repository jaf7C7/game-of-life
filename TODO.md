# TODO

## Basic Rules

- [x] A live cell with no neighbours dies
- [x] A live cell with two or three live neighbours lives on to the next generation
- [x] A live cell with more than three neighbours dies
- [x] A dead cell with exactly three live neighbours becomes a live cell

## The User Interface

- [x] grid of empty cells
- [x] clicking a dead cell makes it alive
- [x] clicking an alive cell makes it dead
- [x] play button starts the game
- [x] stop button stops the game
- [x] game stops when all cells are dead
- [ ] can zoom in/out on the grid: dynamic grid size?
- [ ] presets for some interesting patterns?

- [ ] `createApp(life)`: draws user interface on a webpage and adds event handlers
    - [ ] sets page title
    - [ ] draws a grid with id `grid`
    - [ ] draws a play button with id `play`
    - [ ] draws a stop button with id `stop`
- [ ] `updateGrid(life)`: redraws the grid with the new `life.cells` state
- [ ] `onGridClick(life)`: clicking the grid calls `life.toggleCell(x, y)`
    - [ ] `pixelToCoord(x, y)`: translates pixel location to grid co-ordinate
- [ ] `onPlayClick(life)`: 'play' button calls `life.play()`
- [ ] `onStopClick(life)`: 'stop' button calls `life.stop()`
