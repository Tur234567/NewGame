export function cardFunc() {
    const appElCard = document.querySelector('.game-body-card');
    appElCard.innerHTML = `
        <div class="general-game-game">
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
    </div>
        `
        let num = Math.round(Math.random() * 36);
        const card = document.querySelectorAll('.card-img');
        console.log(card[num]);
        console.log(card[num]);
}

cardFunc();