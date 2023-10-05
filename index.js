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

document.querySelector('button:nth-child(1)').addEventListener('click', play);
document.querySelector('button:nth-child(2)').addEventListener('click', play);
document.querySelector('button:nth-child(3)').addEventListener('click', play);
document.querySelector('button:nth-child(4)').addEventListener('click', play);
document.querySelector('button:nth-child(5)').addEventListener('click', play);
document.querySelector('button:nth-child(6)').addEventListener('click', play);
document.querySelector('button:nth-child(7)').addEventListener('click', play);
document.querySelector('button:nth-child(8)').addEventListener('click', play);
document.querySelector('button:nth-child(9)').addEventListener('click', play);
document.querySelector('button:nth-child(10)').addEventListener('click', play);

//Bonus

const homeElement = document.querySelector('#home');
const reboot = (event) => {
  const question = confirm('Opravdu chcete odejit?');
  if (question === false) {
    event.preventDefault();
  }
};
homeElement.addEventListener('click', reboot);
