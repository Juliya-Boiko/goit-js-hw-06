function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.getElementById('controls').children[1],
  destroyBtn: document.getElementById('controls').children[2],
  boxesContainer: document.getElementById('boxes')
}

const boxProperties = {
  width: 30,
  height: 30
}

function createBoxes() {
  const inputValue = +document.getElementById('controls').children[0].value;
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement('div');
    box.style.width = boxProperties.width + 'px';
    box.style.height = boxProperties.height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.append(box);
    boxProperties.width += 10;
    boxProperties.height += 10;
  }
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);