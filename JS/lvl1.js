import { appEl1 } from "./appEl.js"
import { appEl } from "./contentGame.js"

export function lvl1() {
    appEl.innerHTML = `
    ${appEl1}
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

export function randomLogicsLvl1() {
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