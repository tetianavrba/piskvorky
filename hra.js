import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const policka = document.querySelectorAll('.game-buttons__cell');
const herniPole = [];
let currentPlayer = 'circle';

const play = async (event) => {
  //aby během čekání na Api  uživatel nemohl klikat na další políčka.

  if (currentPlayer === 'circle') {
    event.target.classList.add('game-buttons__circle');
    document.querySelector('#circle_cross').src = 'img/cross.svg';
    currentPlayer = 'cross';
    event.target.disabled = true;

    if (kdoVyhraje()) {
      const herniPole = novePole(); //vytvoří pole reprezentující aktuální stav herního pole,
      const response = await fetch(
        'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            board: herniPole,
            player: 'x',
          }),
        },
      );
      const data = await response.json();
      const { x, y } = data.position;
      const field = policka[x + y * 10];
      field.click();
    }
  } else if (currentPlayer == 'cross') {
    event.target.classList.add('game-buttons__cross');
    document.querySelector('#circle_cross').src = 'img/circle.svg';
    currentPlayer = 'circle';
    event.target.disabled = true;
  }
};
// Posluchač události na kliknutí pro všechni policka.
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

const novePole = () => {
  const herniPole = [];
  policka.forEach((button) => {
    if (button.classList.contains('game-buttons__circle')) {
      herniPole.push('o');
    } else if (button.classList.contains('game-buttons__cross')) {
      herniPole.push('x');
    } else {
      herniPole.push('_');
    }
  });
  return herniPole;
};
const kdoVyhraje = () => {
  const herniPole = novePole();

  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    const winnerAlert = () => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      window.location.reload();
    };
    setTimeout(winnerAlert, 1000);
  }
  if (vitez === 'tie') {
    const tieAlert = () => {
      alert(`Hra skončila remizou.`);
      window.location.reload();
    };
    setTimeout(tieAlert, 1000);
  }
  return true;
};
