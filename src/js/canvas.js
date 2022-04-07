import Ball from "./classes/Ball";
import {
  randomIntFromRange,
  randomColor,
  distance,
  calculateAngle,
  didCollide,
} from "./utils";
import Tetriminos from "./tetriminos";
import Piece from "./classes/Piece";

//

// console.log(soundbox);
//

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
// console.log(gsap);

canvas.width = "500";
canvas.height = innerHeight;
canvas.style.backgroundColor = "#fff";
canvas.style.border = "2px solid black";

///lets take some constants first
export const ROW = 32;
export const COL = 25;
export const SQ = 20;
export const VACANT = "white";
//
//a function to draw a square
function drawSquare(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x * SQ, y * SQ, SQ, SQ);

  c.strokeStyle = "Black";
  c.strokeRect(x * SQ, y * SQ, SQ, SQ);
}
//for loop to create a map for the board
let board = [];
for (let x = 0; x < COL; x++) {
  board[x] = [];
  for (let y = 0; y < ROW; y++) {
    board[x][y] = VACANT;
  }
}
//lets draw the board
function drawBoard() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      drawSquare(row, col, board[row][col]);
    }
  }
}
drawBoard();

//lets draw a tetrimino
let PIECES = [
  [Tetriminos.Z, "red"],
  [Tetriminos.S, "blue"],
  [Tetriminos.T, "Purple"],
  [Tetriminos.J, "Tomato"],
  [Tetriminos.L, "Green"],
  [Tetriminos.O, "Black"],
  [Tetriminos.I, "Orange"],
];

//
let pieces = [];
//
setInterval(() => {
  let randomN = Math.floor(Math.random() * PIECES.length);
  let apiece = new Piece(PIECES[randomN][0], PIECES[randomN][1]);
  apiece.x = Math.floor(Math.random() * (COL - apiece.activeTetromino.length));
  apiece.y = -4;
  pieces.push(apiece);
}, 1500);

// apiece.draw(c, board);

// //ad

//keyboard
// document.addEventListener("keydown", CONTROL);

// function CONTROL(event) {
//   switch (event.keyCode) {
//     case 37:
//       apiece.moveLeft(c, board);
//       break;
//     case 38:
//       apiece.rotate(c, board);
//       break;
//     case 39:
//       apiece.moveRight(c, board);
//       break;
//   }
// }

setInterval(() => {
  pieces.forEach((piece) => {
    if (!piece.locked) piece.moveDown(c, board);
  });
}, 500);
