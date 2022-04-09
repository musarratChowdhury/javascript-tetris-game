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
import TWEEN, { Tween } from "@tweenjs/tween.js";
// console.log(Tweens);

//

// console.log(soundbox);
//
let canvas, c;
// window.onload = () => {
canvas = document.querySelector("canvas");
c = canvas.getContext("2d");
// console.log(gsap);

canvas.width = innerWidth;
canvas.height = innerHeight;
// canvas.style.backgroundColor = "#fff";
// canvas.style.border = "2px solid black";

///lets take some constants first
export const SQ = 20;

export const ROW = canvas.height / SQ;
export const COL = canvas.width / SQ;
export const VACANT = "black";
//
//a function to draw a square
function drawSquare(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x * SQ, y * SQ, SQ, SQ);

  c.strokeStyle = "black";
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
  [Tetriminos.O, "grey"],
  [Tetriminos.I, "Orange"],
];

//
let pieces = [];

//
setInterval(() => {
  let randomN = Math.floor(Math.random() * PIECES.length);
  let apiece = new Piece(PIECES[randomN][0], PIECES[randomN][1]);
  apiece.x = Math.floor(
    Math.random() * (COL - (apiece.activeTetromino.length - 1))
  );
  apiece.y = -4;

  pieces.push(apiece);
}, 2000);

// apiece.draw(c, board);

// //ad

setInterval(() => {
  pieces.forEach((piece) => {
    if (!piece.locked) {
      piece.moveDown(c, board);
    }
  });
}, 300);

//
let myball = new Ball(canvas.width / 2, 0, 20, "tomato");

animate();
function animate() {
  requestAnimationFrame(animate);
  // myball.y += 4;
  // myball.draw(c);

  // TWEEN.update();
  // c.fillStyle = "white";
  // c.fillRect(0, 0, canvas.width, canvas.height);
}
