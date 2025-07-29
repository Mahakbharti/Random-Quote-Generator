const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "Mahak bharti"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  // Corrected lines below: removed curly braces
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

// Initial quote on page load
getRandomQuote();

// New quote on button click
newQuoteBtn.addEventListener("click", getRandomQuote);