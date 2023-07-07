/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/difficultySelection.js":
/*!***********************************!*\
  !*** ./JS/difficultySelection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonStart: () => (/* binding */ buttonStart),
/* harmony export */   levelDifficulty: () => (/* binding */ levelDifficulty)
/* harmony export */ });
function levelDifficulty() {
  for (const buttonComplexity of document.querySelectorAll(
    '.general_level-click',
  )) {
    buttonComplexity.addEventListener('click', function () {
      document.querySelector('.general_level_h1').textContent = 'Жми кнопку';
      localStorage.setItem('complexity', buttonComplexity.textContent);
    });
  }
}
function buttonStart() {
  document
    .querySelector('.general_button')
    .addEventListener('click', function () {
      let numberButton = localStorage.getItem('complexity');
      if (!numberButton) {
        document.querySelector('.general_level_h1').textContent =
          'Выберите уровень сложности';
        throw new Error('Выбрать уровень сложности');
      } else {
        document.querySelector('.general_level_h1').textContent =
          'Выбери сложность';
        window.location.href = 'game.html';
      }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./JS/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _difficultySelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difficultySelection.js */ "./JS/difficultySelection.js");

(0,_difficultySelection_js__WEBPACK_IMPORTED_MODULE_0__.levelDifficulty)();
(0,_difficultySelection_js__WEBPACK_IMPORTED_MODULE_0__.buttonStart)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map