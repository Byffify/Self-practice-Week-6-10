const form = document.querySelector('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const message = document.querySelector('p')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    message.textContent = ''
    message.className = ''

    if (userName.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
        message.textContent = "Missing some values , Please try again!"
        message.style.color = 'red'
        message.classList.add('error')
        return
    }

    if (password.value !== confirmPassword.value) {
        message.textContent = "Password and confirm do not match , Check again!"
        message.style.color = 'red'
        message.classList.add('error')
        return
    }

    message.textContent = "Your data completed!"
    message.style.color = 'green'
    message.classList.add('success')
})