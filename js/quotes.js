const quotes = [
    {
        quote: "The only way out of the labyrinth of suffering is to forgive.",
        author: " John Green",
    },
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "J.K. Rowling",
    },
    {
        quote: "A day without sunshine is like, you know, night.",
        author: "Steve Martin",
    },
    {
        quote: "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
        author: "George R.R. Martin",
    },
    {
        quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
        author: "Mark Twain",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: " Friedrich Nietzsche",
    },
    {
        quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: "Lao Tzu",
    },
    {
        quote: "For every minute you are angry you lose sixty seconds of happiness.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein",
    },
    {
        quote: "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
        author: "Garrison Keillor",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}`;
