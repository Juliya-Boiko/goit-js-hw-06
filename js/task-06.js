
const input = document.querySelector('#validation-input');
const minLength = Number(input.dataset.length);

function inputValidation() {
    const currentText = event.currentTarget.value.length;
    if (currentText === minLength) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}

input.addEventListener('blur', inputValidation);