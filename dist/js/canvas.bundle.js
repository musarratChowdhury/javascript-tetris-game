/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: ROW, COL, SQ, VACANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROW", function() { return ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COL", function() { return COL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQ", function() { return SQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VACANT", function() { return VACANT; });
/* harmony import */ var _classes_Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Ball */ "./src/js/classes/Ball.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tetriminos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetriminos */ "./src/js/tetriminos.js");
/* harmony import */ var _classes_Piece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Piece */ "./src/js/classes/Piece.js");



 //
// console.log(soundbox);
//

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d"); // console.log(gsap);

canvas.width = "500";
canvas.height = innerHeight;
canvas.style.backgroundColor = "#fff";
canvas.style.border = "2px solid black"; ///lets take some constants first

var ROW = 32;
var COL = 25;
var SQ = 20;
var VACANT = "white"; //
//a function to draw a square

function drawSquare(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x * SQ, y * SQ, SQ, SQ);
  c.strokeStyle = "Black";
  c.strokeRect(x * SQ, y * SQ, SQ, SQ);
} //for loop to create a map for the board


var board = [];

for (var x = 0; x < COL; x++) {
  board[x] = [];

  for (var y = 0; y < ROW; y++) {
    board[x][y] = VACANT;
  }
} //lets draw the board


function drawBoard() {
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[0].length; col++) {
      drawSquare(row, col, board[row][col]);
    }
  }
}

drawBoard(); //lets draw a tetrimino

var PIECES = [[_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].Z, "red"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].S, "blue"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].T, "Purple"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].J, "Tomato"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].L, "Green"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].O, "Black"], [_tetriminos__WEBPACK_IMPORTED_MODULE_2__["default"].I, "Orange"]]; //

var pieces = []; //

setInterval(function () {
  var randomN = Math.floor(Math.random() * PIECES.length);
  var apiece = new _classes_Piece__WEBPACK_IMPORTED_MODULE_3__["default"](PIECES[randomN][0], PIECES[randomN][1]);
  apiece.x = Math.floor(Math.random() * (COL - apiece.activeTetromino.length));
  apiece.y = -4;
  pieces.push(apiece);
}, 1500); // apiece.draw(c, board);
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

setInterval(function () {
  pieces.forEach(function (piece) {
    if (!piece.locked) piece.moveDown(c, board);
  });
}, 500);

/***/ }),

/***/ "./src/js/classes/Ball.js":
/*!********************************!*\
  !*** ./src/js/classes/Ball.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ball; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Ball = /*#__PURE__*/function () {
  function Ball(x, y, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      c.closePath();
      c.fill();
    }
  }]);

  return Ball;
}();



/***/ }),

/***/ "./src/js/classes/Piece.js":
/*!*********************************!*\
  !*** ./src/js/classes/Piece.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piece; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Piece = /*#__PURE__*/function () {
  function Piece(tetromino, color) {
    _classCallCheck(this, Piece);

    this.tetromino = tetromino;
    this.color = color;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 0;
    this.y = 0;
    this.locked = false;
  }

  _createClass(Piece, [{
    key: "drawSquare",
    value: function drawSquare(c, x, y, color) {
      c.fillStyle = color;
      c.fillRect(x * _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], y * _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"]);
      c.strokeStyle = "Black";
      c.strokeRect(x * _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], y * _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"], _canvas__WEBPACK_IMPORTED_MODULE_0__["SQ"]);
    }
  }, {
    key: "draw",
    value: function draw(c) {
      for (var r = 0; r < this.activeTetromino.length; r++) {
        for (var col = 0; col < this.activeTetromino.length; col++) {
          if (this.activeTetromino[r][col]) this.drawSquare(c, this.x + col, this.y + r, this.color);
        }
      }
    }
  }, {
    key: "undraw",
    value: function undraw(c) {
      for (var r = 0; r < this.activeTetromino.length; r++) {
        for (var col = 0; col < this.activeTetromino.length; col++) {
          if (this.activeTetromino[r][col]) this.drawSquare(c, this.x + col, this.y + r, _canvas__WEBPACK_IMPORTED_MODULE_0__["VACANT"]);
        }
      }
    }
  }, {
    key: "rotate",
    value: function rotate(c, board) {
      this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
      var nextPattern = this.tetromino[this.tetrominoN];

      if (!this.collisionDetection(0, 0, board, nextPattern)) {
        this.undraw(c);
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw(c);
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown(c, board) {
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
  }, {
    key: "moveLeft",
    value: function moveLeft(c, board) {
      if (!this.collisionDetection(-1, 0, board, this.activeTetromino)) {
        this.undraw(c);
        this.x--;
        this.draw(c);
      } //

    }
  }, {
    key: "moveRight",
    value: function moveRight(c, board) {
      if (!this.collisionDetection(1, 0, board, this.activeTetromino)) {
        this.undraw(c);
        this.x++;
        this.draw(c);
      } //

    }
  }, {
    key: "collisionDetection",
    value: function collisionDetection(x, y, board, activeTetromino) {
      for (var r = 0; r < activeTetromino.length; r++) {
        for (var c = 0; c < activeTetromino.length; c++) {
          if (!activeTetromino[r][c]) continue; //

          var newX = this.x + c + x;
          var newY = this.y + r + y; //

          if (newX < 0 || newX >= _canvas__WEBPACK_IMPORTED_MODULE_0__["COL"] || newY > _canvas__WEBPACK_IMPORTED_MODULE_0__["ROW"]) {
            return true;
          } //


          if (newY < 0) {
            continue;
          } //


          if (board[newX][newY] != _canvas__WEBPACK_IMPORTED_MODULE_0__["VACANT"]) {
            return true;
          }
        }
      }
    }
  }, {
    key: "lock",
    value: function lock(board) {
      for (var r = 0; r < this.activeTetromino.length; r++) {
        for (var c = 0; c < this.activeTetromino.length; c++) {
          if (!this.activeTetromino[r][c]) continue; //

          if (this.y + r < 0) {
            console.log("game over");
            break;
          }

          this.locked = true;
          board[this.x + c][this.y + r] = this.color; // board[1][1] = this.color;
          // console.log(this.activeTetromino);
        }
      }
    }
  }]);

  return Piece;
}();



/***/ }),

/***/ "./src/js/tetriminos.js":
/*!******************************!*\
  !*** ./src/js/tetriminos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tetriminos; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tetriminos = /*#__PURE__*/_createClass(function Tetriminos() {
  _classCallCheck(this, Tetriminos);
});

_defineProperty(Tetriminos, "Z", [[[1, 1, 0], [0, 1, 1], [0, 0, 0]], [[0, 0, 1], [0, 1, 1], [0, 1, 0]], [[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 1, 0], [1, 1, 0], [1, 0, 0]]]);

_defineProperty(Tetriminos, "S", [[[0, 1, 1], [1, 1, 0], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 0, 1]], [[0, 0, 0], [0, 1, 1], [1, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 0]]]);

_defineProperty(Tetriminos, "J", [[[0, 1, 0], [0, 1, 0], [1, 1, 0]], [[1, 0, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 1], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [1, 1, 1], [0, 0, 1]]]);

_defineProperty(Tetriminos, "T", [[[0, 0, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 0], [0, 1, 0]], [[0, 1, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 1, 0]]]);

_defineProperty(Tetriminos, "L", [[[0, 1, 0], [0, 1, 0], [0, 1, 1]], [[0, 0, 0], [1, 1, 1], [1, 0, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 0, 1], [1, 1, 1]]]);

_defineProperty(Tetriminos, "I", [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]], [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]]]);

_defineProperty(Tetriminos, "O", [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]]);



/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
} //calculating the distance between two points


function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
} //collision ditection


function didCollide(obj1, obj2) {
  var dist = Math.hypot(obj2.x - obj1.x, obj2.y - obj1.y);

  if (dist - obj2.radius - obj1.radius < 1) {
    return true;
  } else {
    return false;
  }
} //calculate angular distance between 2 points
//it should be  destination - source,so x1,y1 should be source, x2, y2 should be destination


function calculateAngle(x1, y1, x2, y2) {
  return angle = Math.atan2(y2 - y1, x2 - x1);
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  calculateAngle: calculateAngle,
  didCollide: didCollide
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map