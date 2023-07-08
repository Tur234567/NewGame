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