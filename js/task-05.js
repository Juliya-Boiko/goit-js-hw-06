const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

function changingName() {
    if (event.currentTarget.value === '') {
        outputText.textContent = "Anonymous";
    } else {
        outputText.textContent = event.currentTarget.value;
    }
}

inputText.addEventListener('input', changingName);