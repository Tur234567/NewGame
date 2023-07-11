// файл в котором основа на данный момент
import { appEl1 } from './appEl.js'; // отсюда берутся все карты
import { lvl1, randomLogicsLvl1 } from './lvl1.js';
import { lvl2, randomLogicsLvl2 } from './lvl2.js';
import { lvl3, randomLogicsLvl3 } from './lvl3.js';

export const appEl = document.querySelector('.game-body');

function cardShirt() {
  appEl.innerHTML = `${appEl1}
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
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new" src="static/img/card.svg" alt=""></div>
    </div>
</div>
`;

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
}

export function contentGame() {
  let complexityLevel = localStorage.getItem('complexity');
  console.log(complexityLevel);
  if (complexityLevel === '1') {
    // тут появляются 6 карт
    lvl1();
    setTimeout(cardShirt, 5000);
    randomLogicsLvl1();
  }
  if (complexityLevel === '2') {
    // тут появляются 12 карт
    lvl2();
    setTimeout(cardShirt, 5000);
    randomLogicsLvl2();
  }
  if (complexityLevel === '3') {
    // тут появляются 18 карт
    lvl3();
    setTimeout(cardShirt, 5000);
    randomLogicsLvl3();
  }
  // переносит на главную
  const buttonNew = document.querySelector('.general-game-header_button');
  buttonNew.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}
