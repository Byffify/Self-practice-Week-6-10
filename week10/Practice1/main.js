document.addEventListener('DOMContentLoaded', () => {


    const saveBg = localStorage.getItem('bg');
    const saveFg = localStorage.getItem('fg');
    const saveSize = localStorage.getItem('size')
    const saveBtn = document.getElementById('saveBtn')
    const resetBtn = document.getElementById('resetBtn')

    if (saveBg) {
        document.body.style.backgroundColor = saveBg
        document.getElementById('bg').value = saveBg
    }

    if (saveFg) {
        document.body.style.color = saveFg
        document.getElementById('fg').value = saveFg
    }

    if (saveSize) {
        document.body.style.fontSize = saveSize
        document.getElementById('size').value = saveSize
    }

    saveBtn.addEventListener('click' , () => {
        const bg = document.getElementById('bg').value
        const fg = document.getElementById('fg').value
        const size = document.getElementById('size').value

        localStorage.setItem('bg', bg)
        localStorage.setItem('fg', fg)
        localStorage.setItem('size', size)

        document.body.style.backgroundColor = bg
        document.body.style.color = fg
        document.body.style.fontSize = size
    })

    resetBtn.addEventListener('click' , () => {
        localStorage.removeItem('bg')
        localStorage.removeItem('fg')
        localStorage.removeItem('size')
        
        document.getElementById('size').value = "medium"
        document.getElementById('fg').value = "#000000"
        document.getElementById('bg').value = '#ffffff'
        
        document.body.style.fontSize = "medium"
        document.body.style.color = "#000000"
        document.body.style.backgroundColor = '#ffffff'

    })
    
})