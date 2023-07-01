export function contentGame() {
    let complexityLevel = localStorage.getItem('complexity');
    const appEl = document.querySelector('.app');
        appEl.innerHTML = `
        <h1>Добро пожаловать на игру!</h1>
        <p>Вы на <strong>${complexityLevel}</strong> лвл игры</p>
        `
}