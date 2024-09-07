const container = document.querySelector('.js-div-container');


let userSquares = JSON.parse(localStorage.getItem('userSquares'));

if(!userSquares){
  userSquares = 16;
}
generateBoard(userSquares);

function generateBoard(value){
  for (let i = 0; i < value; i++) {
    let column = document.createElement("div");
    column.classList.add("grid-square", "js-grid-square");
    for (let j = 1; j <= value; j++) {
      let row = document.createElement("div");
      row.classList.add("grid-square", "js-grid-square");
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}
  
document.querySelectorAll('.js-grid-square').forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('grid-square-hover');
  })
});

document.querySelector('.js-button-change-board-size').addEventListener('click', () => {
  userSquares = prompt('Please enter a new value 24 or less');
  while(userSquares > 24){
    userSquares = prompt('Please enter a new value 24 or less');
  }
  localStorage.setItem('userSquares', JSON.stringify(userSquares));
  location.reload();
});

document.querySelector('.js-button-clear').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.js-button-reset-board-size').addEventListener('click', () => {
  userSquares = 16;
  localStorage.setItem('userSquares', JSON.stringify(userSquares));
  location.reload();
});











