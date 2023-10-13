import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const policka = document.querySelectorAll('.game-buttons');
let currentPlayer = 'circle';

const play = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game-buttons__circle');
    document.querySelector('#circle_cross').src = 'img/cross.svg';
    currentPlayer = 'cross';
    event.target.disabled = true;
  } else {
    event.target.classList.add('game-buttons__cross');
    document.querySelector('#circle_cross').src = 'img/circle.svg';
    currentPlayer = 'circle';
    event.target.disabled = true;
  }
};

policka.forEach((button) => {
  button.addEventListener('click', play);
});

//Bonus ukol 2

const homeElement = document.querySelector('#home');
const reboot = (event) => {
  const question = confirm('Opravdu chcete odejit?');
  if (question === false) {
    event.preventDefault();
  }
};
homeElement.addEventListener('click', reboot);
