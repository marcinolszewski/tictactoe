let player = 0,
  round = 0,
  p1score = 0,
  p2score = 0,
  drawCounter = 0,
  tile = document.querySelectorAll('.grid-box a'),
  winner = document.querySelector('.who-won'),
  roundNumber = document.querySelector('.which-round'),
  currentPlayerSign,
  winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

const endGame = sequence => {
  sequence.forEach(el => el.classList.add('winner'));
  tile.forEach(el => el.removeEventListener('click', makeMove));
  round++;
  drawCounter = 0;
  winner.innerText = currentPlayerSign;
  roundNumber.innerText = round;
  addPlayerScore();
  setTimeout(() => {
    sequence.forEach(el => el.classList.remove('winner'));
    resetBoard();
    startGame();
  }, 2000);
};

const endDrawGame = () => {
  tile.forEach(el => el.removeEventListener('click', makeMove));
  round++;
  drawCounter = 0;
  winner.innerText = 'DRAW';
  roundNumber.innerText = round;
  setTimeout(() => {
    resetBoard();
    startGame();
  }, 2000);
}

const drawGame = () => drawCounter === 9 ? endDrawGame() : false;

const determinePlayer = () => {
  player === 0 ? player = 1 : player = 0;
  player === 0 ? currentPlayerSign = 'o' : currentPlayerSign = 'x'
};

const allSame = arr => arr.every(el => el.innerText === arr[0].innerText && el.innerText !== '');

const checkForVicotry = () => {
  winningCondition.forEach(combination => {
    const sequence = [tile[combination[0]], tile[combination[1]], tile[combination[2]]];
    if (allSame(sequence)) {
      endGame(sequence);
    } else {
      drawGame();
    }
  });
}

const makeMove = clickedElement => {
  clickedElement.preventDefault();
  clickedElement.stopPropagation();
  if (!clickedElement.target.textContent) {
    drawCounter+= 1
    determinePlayer();
    clickedElement.target.classList.add(currentPlayerSign);
    clickedElement.target.textContent = currentPlayerSign;
    checkForVicotry();
  }
}

const addPlayerScore = () => {
  player === 0 ? p1score++ : p2score++;
  document.querySelector('.p1-score').innerText = p1score;
  document.querySelector('.p2-score').innerText = p2score;
};

const startGame = () => tile.forEach(el => el.addEventListener('click', makeMove));

const resetBoard = () => tile.forEach(el => el.innerText = '');

startGame();