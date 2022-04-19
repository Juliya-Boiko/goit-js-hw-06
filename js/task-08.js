const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements[0].value === '' || event.currentTarget.elements[1].value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
    const formData = {email: event.currentTarget.elements[0].value, password: event.currentTarget.elements[1].value};
    console.log(formData);
    }
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);