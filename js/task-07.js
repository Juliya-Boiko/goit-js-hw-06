
const ranger = document.querySelector('#font-size-control');
const checkString = document.querySelector('#text');

checkString.style.fontSize = `${ranger.value}px`;

function changingFontSize() {
    checkString.style.fontSize = event.currentTarget.value + "px";
}

ranger.addEventListener('input', changingFontSize);