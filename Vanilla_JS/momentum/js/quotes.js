
const quotes = [
    {
        quote : "0",
        author : "A",
    },
    {
        quote : "1",
        author : "B",
    },
    {
        quote : "2",
        author : "C",
    },
    {
        quote : "3",
        author : "D",
    },
    {
        quote : "4",
        author : "E",
    },
    {
        quote : "5",
        author : "F",
    },
    {
        quote : "6",
        author : "G",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/* Math.random() 
0~1 사이의 랜덤한 숫자를 제공한다. 

Math.round() ->  반올림 해준다(1.5 => 2)
Math.ceil() -> 올림 해준다(1.1 => 2)
Math.floor() -> 내림 해준다 (1.1=> 1)
*/
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;