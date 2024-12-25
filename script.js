'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;s
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.score').style.width = '15rem';
  document.querySelector('.number').style.width = window.matchMedia(
    '(max-width: 740px)'
  ).matches
    ? '15rem'
    : '30rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No number!';
    displayMessage('😒 No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎊 Correct Number';
    displayMessage('🎊 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';

    // document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.width = window.matchMedia(
      '(max-width: 740px)'
    ).matches
      ? '30rem'
      : '15rem';
  } else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent = guess > secretNumber ? '🤡 Too High' : '💀 Too Low';
    displayMessage(guess > secretNumber ? '🤡 Too High' : '💀 Too Low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      //   document.querySelector('.message').textContent = '😒 You Lost The Game! Nonnnnnnnnnnnnnnnnn';
      displayMessage('😒 You Lost The Game! Nonnnnnnnnnnnnnnnnn');
      document.querySelector('.score').textContent = 0;
    }
  }
});
