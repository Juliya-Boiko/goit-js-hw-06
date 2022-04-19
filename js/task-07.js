
const ranger = document.querySelector('#font-size-control');
const checkString = document.querySelector('#text');

function changingFontSize() {
    checkString.style.fontSize = event.currentTarget.value + "px";
}

ranger.addEventListener('input', changingFontSize);