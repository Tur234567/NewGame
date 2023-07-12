import { contentGame } from "./contentGame.js";

export function levelDifficulty() {
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
  contentGame();
}

export function buttonStart() {
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
