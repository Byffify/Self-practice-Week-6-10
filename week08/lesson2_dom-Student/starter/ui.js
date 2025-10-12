import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
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




// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('I will not go home without you', 'Maroon5')
addQuote('HaHaHa', 'JJ')
addQuote('Hello World!', 'Seua')
addQuote('Hello World!', '')
addQuote('', 'eiei')

renderQuotes();
