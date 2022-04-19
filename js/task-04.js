let counterValue = 0;
const calculator = document.querySelector('#value');
const decrBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrBtn = document.querySelector('#counter button[data-action="increment"]');

function plusOne() {
    counterValue += 1;
    calculator.textContent = counterValue;
}

function minusOne() {
    counterValue -= 1;
    calculator.textContent = counterValue;
}

incrBtn.addEventListener('click', plusOne);
decrBtn.addEventListener('click', minusOne);