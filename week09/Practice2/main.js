const keyInput = document.getElementById('keyInput')
const message = document.getElementById('keyLog')

function log(text, color) {
    const p = document.createElement('p')
    p.style.color = color
    p.textContent = text
    message.append(p)
}

keyInput.addEventListener('keydown' , x => {
    const key = x.key
    if (key === 'Enter') {
        log(`You pressed: ${key}` , 'blue')
        return
    }
    log(`You pressed: ${key}` , 'black')
    return
})