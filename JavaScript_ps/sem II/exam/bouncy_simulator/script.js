/*
[EXAM] Create a bouncy simulator. Get board from ExampleInput.js.
Y – when bouncing ball gets in collision with it, redirect the ball to a random direction, other that it came from. 
After that Y turns into 0.
X – border,
0 – fields, that the ball can travel through,
1 – bouncing ball

The program should show how the ball travels and bounces against the walls. 
Bouncing objects starts in any corner. Assume that 1 and Y positions may vary.
*/

import { board as exampleInput } from "./const/exampleInput.js";
import { BoardEngine } from "./classes/board_engine.js";

const board = new BoardEngine(exampleInput);
board.createBoardVisualization();
board.findFieldSquaresNearBallAndChoseOne();

const ballCords = board.ballCoordinates;
const nextMove = board.nextPossibleMove;

board.getMoveDirection(ballCords, nextMove);

setInterval(() => {
  board.updateBallPosition();

  if (!board.makeMove()) {
    board.makeBounce();
    board.makeMove();
  }
}, 200);
