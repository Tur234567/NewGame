/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/appEl.js":
/*!*********************!*\
  !*** ./JS/appEl.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appEl1: () => (/* binding */ appEl1)
/* harmony export */ });
const appEl1 = `<div class="CARDS">
<div class="card"><img class="card-img" src="img/card/туз пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/король пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/дама пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/валет пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/10 пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/9 пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/8 пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/7 пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/6 пики.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/туз черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/король черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/дама черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/валет черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/10 черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/9 черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/8 черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/7 черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/6 черви.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/туз бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/король бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/дама бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/валет бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/10 бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/9 бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/8 бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/7 бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/6 бубны.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/туз крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/король крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/дама крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/валет крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/10 крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/9 крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/8 крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/7 крести.svg" alt=""></div>
<div class="card"><img class="card-img" src="img/card/6 крести.svg" alt=""></div>
</div>
`


/***/ }),

/***/ "./JS/contentGame.js":
/*!***************************!*\
  !*** ./JS/contentGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appEl: () => (/* binding */ appEl),
/* harmony export */   contentGame: () => (/* binding */ contentGame)
/* harmony export */ });
/* harmony import */ var _appEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appEl.js */ "./JS/appEl.js");
/* harmony import */ var _lvl1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lvl1.js */ "./JS/lvl1.js");
/* harmony import */ var _lvl2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lvl2.js */ "./JS/lvl2.js");
/* harmony import */ var _lvl3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lvl3.js */ "./JS/lvl3.js");
// файл в котором основа на данный момент
 // отсюда берутся все карты




const appEl = document.querySelector('.game-body');
 
function cardShirt() {
    appEl.innerHTML = `${_appEl_js__WEBPACK_IMPORTED_MODULE_0__.appEl1}
    <div class="general-game">
    <div class="general-game-header">
        <div class="general-game_time">
            <div class="general-game-p">
                <p>min</p>
                <p>sek</p>
            </div>
            <h1 class="general-game-h1">00 . 00</h1>
        </div>
        <button class="general-game-header_button">Начать заново</button>
    </div>
    <div class="general-game-card">
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="img/card.svg" alt=""></div>
    </div>
</div>
`

// попытка сделать логику сравнения
const buttonNew = document.querySelector('.general-game-header_button');
    buttonNew.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
      const card = document.querySelectorAll('.card-img');
      const imgCNew = document.querySelectorAll('.img-c-new');
      imgCNew.forEach((imgC, imgNum) => {
        imgC.addEventListener('click', function () {
            imgC.src = card[imgNum].src;
            if (card[imgNum].src === localStorage.getItem('card1')) {
                alert('molodec');
            }
            if (card[imgNum].src === localStorage.getItem('card2')) {
              alert('molodec');
            }
            if (card[imgNum].src === localStorage.getItem('card3')) {
              alert('molodec');
            }
            if (card[imgNum].src === localStorage.getItem('card4')) {
              alert('molodec');
            }
            if (card[imgNum].src === localStorage.getItem('card5')) {
              alert('molodec');
          }
          if (card[imgNum].src === localStorage.getItem('card6')) {
            alert('molodec');
          }
          if (card[imgNum].src === localStorage.getItem('card7')) {
            alert('molodec');
          }
          if (card[imgNum].src === localStorage.getItem('card8')) {
            alert('molodec');
          }
          if (card[imgNum].src === localStorage.getItem('card9')) {
            alert('molodec');
        }
        if (card[imgNum].src === localStorage.getItem('card10')) {
          alert('molodec');
        }
        if (card[imgNum].src === localStorage.getItem('card11')) {
          alert('molodec');
        }
        if (card[imgNum].src === localStorage.getItem('card12')) {
          alert('molodec');
        }
        if (card[imgNum].src === localStorage.getItem('card13')) {
          alert('molodec');
      }
      if (card[imgNum].src === localStorage.getItem('card14')) {
        alert('molodec');
      }
      if (card[imgNum].src === localStorage.getItem('card15')) {
        alert('molodec');
      }
      if (card[imgNum].src === localStorage.getItem('card16')) {
        alert('molodec');
      }
      if (card[imgNum].src === localStorage.getItem('card17')) {
        alert('molodec');
      }
      if (card[imgNum].src === localStorage.getItem('card18')) {
        alert('molodec');
      } 
        });
      });
};

function contentGame() {
  let complexityLevel = localStorage.getItem('complexity');
  console.log(complexityLevel);
  if(complexityLevel === '1') {
    // тут появляются 6 карт
    (0,_lvl1_js__WEBPACK_IMPORTED_MODULE_1__.lvl1)();
    setTimeout(cardShirt, 5000);
    (0,_lvl1_js__WEBPACK_IMPORTED_MODULE_1__.randomLogicsLvl1)();
  }
  if(complexityLevel === '2') {
    // тут появляются 12 карт
    (0,_lvl2_js__WEBPACK_IMPORTED_MODULE_2__.lvl2)();
    setTimeout(cardShirt, 5000);
    (0,_lvl2_js__WEBPACK_IMPORTED_MODULE_2__.randomLogicsLvl2)();
  }
  if(complexityLevel === '3') {
     // тут появляются 18 карт
    (0,_lvl3_js__WEBPACK_IMPORTED_MODULE_3__.lvl3)();
    setTimeout(cardShirt, 5000);
    (0,_lvl3_js__WEBPACK_IMPORTED_MODULE_3__.randomLogicsLvl3)();
  }
// переносит на главную
  const buttonNew = document.querySelector('.general-game-header_button');
  buttonNew.addEventListener('click', function () {
    window.location.href = 'index.html';
  })
}


/***/ }),

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
/* harmony import */ var _contentGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentGame.js */ "./JS/contentGame.js");


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

function additionalOptions() {
  document.querySelector('.body').className = 'add-body';;
  document.querySelector('.general').style.display = 'none';
  (0,_contentGame_js__WEBPACK_IMPORTED_MODULE_0__.contentGame)();
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
          additionalOptions();
      }
    });
}


/***/ }),

/***/ "./JS/lvl1.js":
/*!********************!*\
  !*** ./JS/lvl1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lvl1: () => (/* binding */ lvl1),
/* harmony export */   randomLogicsLvl1: () => (/* binding */ randomLogicsLvl1)
/* harmony export */ });
/* harmony import */ var _appEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appEl.js */ "./JS/appEl.js");
/* harmony import */ var _contentGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentGame.js */ "./JS/contentGame.js");



function lvl1() {
    _contentGame_js__WEBPACK_IMPORTED_MODULE_1__.appEl.innerHTML = `
    ${_appEl_js__WEBPACK_IMPORTED_MODULE_0__.appEl1}
    <div class="general-game">
    <div class="general-game-header">
        <div class="general-game_time">
            <div class="general-game-p">
                <p>min</p>
                <p>sek</p>
            </div>
            <h1 class="general-game-h1">00 . 00</h1>
        </div>
        <button class="general-game-header_button">Начать заново</button>
    </div>
    <div class="general-game-card">
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c"src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
    </div>
</div>
    `
}

function randomLogicsLvl1() {
        let num1 = Math.round(Math.random() * 36);
        let num2 = Math.round(Math.random() * 36);
        let num3 = Math.round(Math.random() * 36);
        let num4 = Math.round(Math.random() * 36);
        let num5 = Math.round(Math.random() * 36);
        let num6 = Math.round(Math.random() * 36);
        const card = document.querySelectorAll('.card-img');
        const imgC = document.querySelectorAll('.img-c');
        imgC[0].src = card[num1].src;
        imgC[1].src = card[num2].src;
        imgC[2].src = card[num3].src;
        imgC[3].src = card[num4].src;
        imgC[4].src = card[num5].src;
        imgC[5].src = card[num6].src;
        localStorage.removeItem('card1');
        localStorage.removeItem('card2');
        localStorage.removeItem('card3');
        localStorage.removeItem('card4');
        localStorage.removeItem('card5');
        localStorage.removeItem('card6');
        localStorage.removeItem('card7');
        localStorage.removeItem('card8');
        localStorage.removeItem('card9');
        localStorage.removeItem('card10');
        localStorage.removeItem('card11');
        localStorage.removeItem('card12');
        localStorage.removeItem('card13');
        localStorage.removeItem('card14');
        localStorage.removeItem('card15');
        localStorage.removeItem('card16');
        localStorage.removeItem('card17');
        localStorage.removeItem('card18');
        localStorage.setItem('card1', card[num1].src);
        localStorage.setItem('card2', card[num2].src);
        localStorage.setItem('card3', card[num3].src);
        localStorage.setItem('card4', card[num4].src);
        localStorage.setItem('card5', card[num5].src);
        localStorage.setItem('card6', card[num6].src);
        
}

/***/ }),

/***/ "./JS/lvl2.js":
/*!********************!*\
  !*** ./JS/lvl2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lvl2: () => (/* binding */ lvl2),
/* harmony export */   randomLogicsLvl2: () => (/* binding */ randomLogicsLvl2)
/* harmony export */ });
/* harmony import */ var _appEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appEl.js */ "./JS/appEl.js");
/* harmony import */ var _contentGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentGame.js */ "./JS/contentGame.js");



function lvl2() {
    _contentGame_js__WEBPACK_IMPORTED_MODULE_1__.appEl.innerHTML = `${_appEl_js__WEBPACK_IMPORTED_MODULE_0__.appEl1}
    <div class="general-game">
    <div class="general-game-header">
        <div class="general-game_time">
            <div class="general-game-p">
                <p>min</p>
                <p>sek</p>
            </div>
            <h1 class="general-game-h1">00 . 00</h1>
        </div>
        <button class="general-game-header_button">Начать заново</button>
    </div>
    <div class="general-game-card">
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
    </div>
</div>
    `
}

function randomLogicsLvl2() {
        let num1 = Math.round(Math.random() * 36);
        let num2 = Math.round(Math.random() * 36);
        let num3 = Math.round(Math.random() * 36);
        let num4 = Math.round(Math.random() * 36);
        let num5 = Math.round(Math.random() * 36);
        let num6 = Math.round(Math.random() * 36);
        let num7 = Math.round(Math.random() * 36);
        let num8 = Math.round(Math.random() * 36);
        let num9 = Math.round(Math.random() * 36);
        let num10 = Math.round(Math.random() * 36);
        let num11 = Math.round(Math.random() * 36);
        let num12 = Math.round(Math.random() * 36);
        const card = document.querySelectorAll('.card-img');
        const imgC = document.querySelectorAll('.img-c');
        imgC[0].src = card[num1].src;
        imgC[1].src = card[num2].src;
        imgC[2].src = card[num3].src;
        imgC[3].src = card[num4].src;
        imgC[4].src = card[num5].src;
        imgC[5].src = card[num6].src;
        imgC[6].src = card[num7].src;
        imgC[7].src = card[num8].src;
        imgC[8].src = card[num9].src;
        imgC[9].src = card[num10].src;
        imgC[10].src = card[num11].src;
        imgC[11].src = card[num12].src;
        localStorage.removeItem('card1');
        localStorage.removeItem('card2');
        localStorage.removeItem('card3');
        localStorage.removeItem('card4');
        localStorage.removeItem('card5');
        localStorage.removeItem('card6');
        localStorage.removeItem('card7');
        localStorage.removeItem('card8');
        localStorage.removeItem('card9');
        localStorage.removeItem('card10');
        localStorage.removeItem('card11');
        localStorage.removeItem('card12');
        localStorage.removeItem('card13');
        localStorage.removeItem('card14');
        localStorage.removeItem('card15');
        localStorage.removeItem('card16');
        localStorage.removeItem('card17');
        localStorage.removeItem('card18');
        localStorage.setItem('card1', card[num1].src);
        localStorage.setItem('card2', card[num2].src);
        localStorage.setItem('card3', card[num3].src);
        localStorage.setItem('card4', card[num4].src);
        localStorage.setItem('card5', card[num5].src);
        localStorage.setItem('card6', card[num6].src);
        localStorage.setItem('card7', card[num7].src);
        localStorage.setItem('card8', card[num8].src);
        localStorage.setItem('card9', card[num9].src);
        localStorage.setItem('card10', card[num10].src);
        localStorage.setItem('card11', card[num11].src);
        localStorage.setItem('card12', card[num12].src);
}

/***/ }),

/***/ "./JS/lvl3.js":
/*!********************!*\
  !*** ./JS/lvl3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lvl3: () => (/* binding */ lvl3),
/* harmony export */   randomLogicsLvl3: () => (/* binding */ randomLogicsLvl3)
/* harmony export */ });
/* harmony import */ var _appEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appEl.js */ "./JS/appEl.js");
/* harmony import */ var _contentGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentGame.js */ "./JS/contentGame.js");



function lvl3() {
    _contentGame_js__WEBPACK_IMPORTED_MODULE_1__.appEl.innerHTML = `${_appEl_js__WEBPACK_IMPORTED_MODULE_0__.appEl1}
    <div class="general-game">
    <div class="general-game-header">
        <div class="general-game_time">
            <div class="general-game-p">
                <p>min</p>
                <p>sek</p>
            </div>
            <h1 class="general-game-h1">00 . 00</h1>
        </div>
        <button class="general-game-header_button">Начать заново</button>
    </div>
    <div class="general-game-card">
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
        <div class="card"><img class="visible" src="img/card.svg" alt=""></div>
    </div>
</div>
    `
}

function randomLogicsLvl3() {
    let num1 = Math.round(Math.random() * 36);
    let num2 = Math.round(Math.random() * 36);
    let num3 = Math.round(Math.random() * 36);
    let num4 = Math.round(Math.random() * 36);
    let num5 = Math.round(Math.random() * 36);
    let num6 = Math.round(Math.random() * 36);
    let num7 = Math.round(Math.random() * 36);
    let num8 = Math.round(Math.random() * 36);
    let num9 = Math.round(Math.random() * 36);
    let num10 = Math.round(Math.random() * 36);
    let num11 = Math.round(Math.random() * 36);
    let num12 = Math.round(Math.random() * 36);
    let num13 = Math.round(Math.random() * 36);
    let num14 = Math.round(Math.random() * 36);
    let num15 = Math.round(Math.random() * 36);
    let num16 = Math.round(Math.random() * 36);
    let num17 = Math.round(Math.random() * 36);
    let num18 = Math.round(Math.random() * 36);
    const card = document.querySelectorAll('.card-img');
    const imgC = document.querySelectorAll('.img-c');
    imgC[0].src = card[num1].src;
    imgC[1].src = card[num2].src;
    imgC[2].src = card[num3].src;
    imgC[3].src = card[num4].src;
    imgC[4].src = card[num5].src;
    imgC[5].src = card[num6].src;
    imgC[6].src = card[num7].src;
    imgC[7].src = card[num8].src;
    imgC[8].src = card[num9].src;
    imgC[9].src = card[num10].src;
    imgC[10].src = card[num11].src;
    imgC[11].src = card[num12].src;
    imgC[12].src = card[num13].src;
    imgC[13].src = card[num14].src;
    imgC[14].src = card[num15].src;
    imgC[15].src = card[num16].src;
    imgC[16].src = card[num17].src;
    imgC[17].src = card[num18].src;
        localStorage.removeItem('card1');
        localStorage.removeItem('card2');
        localStorage.removeItem('card3');
        localStorage.removeItem('card4');
        localStorage.removeItem('card5');
        localStorage.removeItem('card6');
        localStorage.removeItem('card7');
        localStorage.removeItem('card8');
        localStorage.removeItem('card9');
        localStorage.removeItem('card10');
        localStorage.removeItem('card11');
        localStorage.removeItem('card12');
        localStorage.removeItem('card13');
        localStorage.removeItem('card14');
        localStorage.removeItem('card15');
        localStorage.removeItem('card16');
        localStorage.removeItem('card17');
        localStorage.removeItem('card18');
    localStorage.setItem('card1', card[num1].src);
    localStorage.setItem('card2', card[num2].src);
    localStorage.setItem('card3', card[num3].src);
    localStorage.setItem('card4', card[num4].src);
    localStorage.setItem('card5', card[num5].src);
    localStorage.setItem('card6', card[num6].src);
    localStorage.setItem('card7', card[num7].src);
    localStorage.setItem('card8', card[num8].src);
    localStorage.setItem('card9', card[num9].src);
    localStorage.setItem('card10', card[num10].src);
    localStorage.setItem('card11', card[num11].src);
    localStorage.setItem('card12', card[num12].src);
    localStorage.setItem('card13', card[num13].src);
    localStorage.setItem('card14', card[num14].src);
    localStorage.setItem('card15', card[num15].src);
    localStorage.setItem('card16', card[num16].src);
    localStorage.setItem('card17', card[num17].src);
    localStorage.setItem('card18', card[num18].src);
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