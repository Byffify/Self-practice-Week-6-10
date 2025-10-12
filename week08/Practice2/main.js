const box = document.getElementById('box')
document.querySelectorAll('button[data-color]').forEach( x => {
    x?.addEventListener("click" , () => {
        const color = x.dataset.color;
        box.style.backgroundColor = color;
        box.textContent = color.toUpperCase()
    })
})