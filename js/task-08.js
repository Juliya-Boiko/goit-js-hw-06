const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const userEmail = event.currentTarget.elements[0];
    const userPassword = event.currentTarget.elements[1];
    if (userEmail.value === '' || userPassword.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
    const formData = {email: userEmail.value, password:userPassword.value};
    console.log(formData);
    }
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);