import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.querySelector('#randomQuoteDisplay')

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>

  const divElement = document.createElement('div')
  divElement.dataset.id = quote.id
  
  const author = document.createElement('p')
  author.textContent = quote.author
  
  const content = document.createElement('p')
  content.textContent = quote.content

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.textContent = "Edit"
  editBtn.dataset.id = quote.id
  editBtn.addEventListener("click" , () => {
    contentInput.value = quote.content
    authorInput.value = quote.author
    idInput.value = quote.id
  })

  const rmBtn = document.createElement('button')
  rmBtn.className = 'delete-btn'
  rmBtn.textContent = "Delete"
  rmBtn.dataset.id = quote.id
  rmBtn.addEventListener("click" , () => {
    deleteQuote(quote.id)
    deleteQuoteFromDOM(quote.id)
  })

  divElement.append(content,author,editBtn,rmBtn)
  return divElement
}

form.addEventListener("submit" , y => {
  y.preventDefault()

  const newContent = contentInput.value
  const newAuthor = authorInput.author
  const newId = idInput.value

  if (newId === "") {
    const newQuote = addQuote(newContent,newAuthor)
    addQuoteToDOM(newQuote)
  } else {
    const update = updateQuote(Number(newId),newContent,newAuthor)
    updateQuoteInDOM(update)
  }

  form.reset()
  idInput.value = ""
})

randomBtn.addEventListener("click" , showRandomQuote)

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const add = document.querySelector(`[data-id = "${quote.id}"]`)
  quoteList.append(add)
}

function updateQuoteInDOM(quote) {
  const findId = document.querySelector(`[data-id = "${quote.id}"]`)
  const updateId = findId.querySelectorAll('p')
  updateId[0].textContent = quote.content
  updateId[1].textContent = quote.author
}

function deleteQuoteFromDOM(id) {
  const del = document.querySelector(`[data-id = "${id}"]`)
  del.remove()
}

function renderQuotes() {
    quoteList.innerHTML = ''

  if (typeof getAllQuotes === 'function') {
    const result = getAllQuotes()
    if (Array.isArray(result)) {
      quotes = result
    } else {
      quotes = []
    }
  } else {
    quotes = []
  }

  for (let i = 0; i < quotes.length; i++) {
    const q = quotes[i]
    const p = document.createElement('p')
    const content = q && q.content ? q.content : ''
    const author  = q && q.author  ? q.author  : 'Unknown'
    p.textContent = `${content} --> ${author}`
    quoteList.appendChild(p)
  }
}

function showRandomQuote() {
  const getAll = getAllQuotes()
  let random = Math.floor(Math.random() * getAll.length)
  let select = getAll[random]
  randomDisplay.textContent = `${select.content} — ${select.author}`
}
// Event listeners for form submission, edit, and delete clicks
