import { appEl1 } from "./appEl.js"; // отсюда берутся все карты
import { lvl1 } from "./lvl1.js";
import { lvl2 } from "./lvl2.js";
import { lvl3 } from "./lvl3.js";

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
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
        <div class="card"><img class="img-c-new"src="img/card.svg" alt=""></div>
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
        });
      });
};

export function contentGame() {
  let complexityLevel = localStorage.getItem('complexity');
  console.log(complexityLevel);
  if(complexityLevel === '1') {
    // тут появляются 6 карт
    lvl1();
    setTimeout(cardShirt, 5000);
  }
  if(complexityLevel === '2') {
    // тут появляются 12 карт
    lvl2();
  }
  if(complexityLevel === '3') {
     // тут появляются 18 карт
    lvl3();
  }
// переносит на главную
  const buttonNew = document.querySelector('.general-game-header_button');
  buttonNew.addEventListener('click', function () {
    window.location.href = 'index.html';
  })

  // логика рандома на 6 карт
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
        localStorage.setItem('card1', card[num1].src);
        localStorage.setItem('card2', card[num2].src);
        localStorage.setItem('card3', card[num3].src);
        localStorage.setItem('card4', card[num4].src);
        localStorage.setItem('card5', card[num5].src);
        localStorage.setItem('card6', card[num6].src);
}
