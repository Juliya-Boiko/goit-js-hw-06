function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyColor: document.body,
  colorChangeBtn: document.querySelector('.change-color'),
  currentColorSpan: document.querySelector('.color')
}

function colorChanging() {
  const currentColor = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = currentColor;
  refs.currentColorSpan.textContent = currentColor;
}

refs.colorChangeBtn.addEventListener('click', colorChanging);