let currentPlayer = 'circle';

const play = (event, target) => {
  currentPlayer === 'circle';
  event.target.classList.add('game-buttons__circle');
  event.target.disabled = true;
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
