export function contentGame() {
    let complexityLevel = localStorage.getItem('complexity');
    console.log(complexityLevel);
    const appEl = document.querySelector('.game-body');
    appEl.innerHTML = `
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
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
        <div class="card"><img src="img/card.svg" alt=""></div>
    </div>
</div>
    `;
}
