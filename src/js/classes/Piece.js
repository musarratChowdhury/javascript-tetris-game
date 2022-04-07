import { SQ, ROW, COL, VACANT } from "../canvas";
export default class Piece {
  constructor(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 0;
    this.y = 0;
    this.locked = false;
  }

  drawSquare(c, x, y, color) {
    c.fillStyle = color;
    c.fillRect(x * SQ, y * SQ, SQ, SQ);

    c.strokeStyle = "Black";
    c.strokeRect(x * SQ, y * SQ, SQ, SQ);
  }
  draw(c) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
      for (let col = 0; col < this.activeTetromino.length; col++) {
        if (this.activeTetromino[r][col])
          this.drawSquare(c, this.x + col, this.y + r, this.color);
      }
    }
  }
  undraw(c) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
      for (let col = 0; col < this.activeTetromino.length; col++) {
        if (this.activeTetromino[r][col])
          this.drawSquare(c, this.x + col, this.y + r, VACANT);
      }
    }
  }
  rotate(c, board) {
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    const nextPattern = this.tetromino[this.tetrominoN];
    if (!this.collisionDetection(0, 0, board, nextPattern)) {
      this.undraw(c);

      this.activeTetromino = this.tetromino[this.tetrominoN];
      this.draw(c);
    }
  }
  moveDown(c, board) {
    if (!this.collisionDetection(0, 1, board, this.activeTetromino)) {
      this.undraw(c);
      this.y++;
      this.draw(c);
    } else {
      // console.log("bottom reached");
      //call lock function

      this.lock(board);
      this.locked = true;
    }
  }
  moveLeft(c, board) {
    if (!this.collisionDetection(-1, 0, board, this.activeTetromino)) {
      this.undraw(c);
      this.x--;
      this.draw(c);
    }

    //
  }
  moveRight(c, board) {
    if (!this.collisionDetection(1, 0, board, this.activeTetromino)) {
      this.undraw(c);
      this.x++;
      this.draw(c);
    }
    //
  }
  collisionDetection(x, y, board, activeTetromino) {
    for (let r = 0; r < activeTetromino.length; r++) {
      for (let c = 0; c < activeTetromino.length; c++) {
        if (!activeTetromino[r][c]) continue;
        //
        let newX = this.x + c + x;
        let newY = this.y + r + y;
        //
        if (newX < 0 || newX >= COL || newY > ROW) {
          return true;
        }
        //
        if (newY < 0) {
          continue;
        }
        //
        if (board[newX][newY] != VACANT) {
          return true;
        }
      }
    }
  }
  lock(board) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
      for (let c = 0; c < this.activeTetromino.length; c++) {
        if (!this.activeTetromino[r][c]) continue;
        //
        if (this.y + r < 0) {
          console.log("game over");
          break;
        }
        this.locked = true;
        board[this.x + c][this.y + r] = this.color;
        // board[1][1] = this.color;
        // console.log(this.activeTetromino);
      }
    }
  }
}
