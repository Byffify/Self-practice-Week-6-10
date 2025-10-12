const box = document.getElementById('box')
const addBorder = document.getElementById('add')
const rmBorder = document.getElementById('remove')
const tgBorder = document.getElementById('toggle')

addBorder?.addEventListener("click" , () => {
    box.classList.add("bordered")
})
rmBorder?.addEventListener("click" , () => {
    box.classList.remove("bordered")
})
tgBorder?.addEventListener("click" , () => {
    box.classList.toggle("bordered")
})