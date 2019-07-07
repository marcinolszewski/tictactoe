let player = 0,
  tile = document.querySelectorAll('.grid-box a'),
  currentPlayerSign,
  winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];

const endGame = () => console.log('game end');
const allSame = arr => arr.every(el => el.innerText === arr[0].innerText && el.innerText !== '');
const checkForVicotry = () => {
  let victory = false;

  winningCondition.forEach(combination => {
    const grid = tile;
    const sequence = [grid[combination[0]], grid[combination[1]], grid[combination[2]]];
    if(allSame(sequence)) {
      victory = true;
      endGame();
    }
  });

  return victory;
}

tile.forEach((el, index) => {
  el.addEventListener('click', (clickedElement) => {
    clickedElement.preventDefault();
    if (!clickedElement.target.textContent) {
      player === 0 ? player = 1 : player = 0;
      player === 0 ? currentPlayerSign = 'o' : currentPlayerSign = 'x';
      clickedElement.target.classList.add(currentPlayerSign);
      clickedElement.target.textContent = currentPlayerSign;
      checkForVicotry();
    }
  });
});