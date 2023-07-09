import { appEl1 } from "./appEl.js";
import { appEl } from "./contentGame.js";

export function lvl3() {
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

export function randomLogicsLvl3() {
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
    localStorage.clear();
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