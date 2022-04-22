const form = document.querySelector('.login-form');
const [userEmail, userPassword, loginBtn] = form;

function onFormSubmit(event) {
    event.preventDefault();
    if (userEmail.value === '' || userPassword.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
    const formData = {email: userEmail.value, password: userPassword.value};
    console.log(formData);
    }
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);