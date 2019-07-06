let player = 0,
  tile = document.querySelectorAll('.grid-box a'),
  score = [[],[],[]],
  currentPlayerSign;

tile.forEach(el => {
  el.addEventListener('click', clickedElement => {
    clickedElement.preventDefault();
    if (!clickedElement.target.textContent) {
      player === 0 ? player = 1 : player = 0;
      player === 0 ? currentPlayerSign = 'o' : currentPlayerSign = 'x';
      clickedElement.target.textContent = currentPlayerSign;
    } 
  });
});