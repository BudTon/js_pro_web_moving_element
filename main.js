/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblinBurrow/goblinBurrow.js
class GoblinBurrow {
  constructor(elem) {
    this.burrow = elem.querySelectorAll(".goblin-burrow");
    this.photoGoblin = elem.querySelector(".img-goblin");
  }
  getRandomPosition() {
    let previous = 0;
    let i = 0;
    setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.burrow.length - 1));
      }
      previous = i;
      this.burrow[i].appendChild(this.photoGoblin);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const goblin = new GoblinBurrow(document.querySelector(".game-field"));
goblin.getRandomPosition();
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/index.js




// TODO: write your code in app.js
/******/ })()
;