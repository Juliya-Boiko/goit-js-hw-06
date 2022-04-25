function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.getElementById('controls').children[1],
  destroyBtn: document.getElementById('controls').children[2],
  boxesContainer: document.getElementById('boxes')
}

let boxSize = 30;

function createBoxes() {
  const inputValue = +document.getElementById('controls').children[0].value;
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.append(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
  boxSize = 30;
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);