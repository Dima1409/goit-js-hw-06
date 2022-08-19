const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: {email, password}}=event.currentTarget;
    if(email.value === '') {
        alert('Не заповнене поле "Email"')
    }
    if(password.value === '') {
        alert('Не заповнене поле "Password"')
    }
    console.log(`userEmail: ${email.value}, userPassword: ${password.value}`)
    form.reset()
}