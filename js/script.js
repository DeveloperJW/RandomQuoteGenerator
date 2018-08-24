// FSJS - Random Quote Generator

// Create the array of quote objects and source it quotes
let quotes=[
    {
        quote:"Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.",
        source:"Mark Twain",
        citation:"eduro.com",
        year:"decades ago",
    }, {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        source:"Francis of Assisi"
    }, {
        quote:"Believe you can and you're halfway there.",
        source:"Theodore Roosevelt",
        year:"decades ago",
    }, {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        source:"Confucius",
        citation: "google",
    }, {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source:"Thomas A. Edison"
    },
];


// Create the getRandomQuote function and source it getRandomQuote
function getRandomQuote(array) {
    // generate a random number from 0 to the length of the parameter array
    let randomNum=Math.floor(Math.random()*array.length);
    return array[randomNum];
}


// Create the printQuote function and source it printQuote
const printQuote= ()=>{
    let randomQuoteObject=getRandomQuote(quotes);
    let stringOfQuoteProperties =
        `<p class='quote'> ${randomQuoteObject['quote']}</p>
        <p class='source'>${randomQuoteObject['source']}
        `;
    if (randomQuoteObject['citation'] !== undefined){
        stringOfQuoteProperties+=`<span class='citation'> ${randomQuoteObject['citation']}</span>`;
    } if (randomQuoteObject['year']!== undefined){
        stringOfQuoteProperties+=`<span class='year'> ${randomQuoteObject['year']} </span>`;
        stringOfQuoteProperties+="</p>";
    }
    else {
        stringOfQuoteProperties+="</p>";
    }

    // document.write(getRandomQuote(quotes)["quote"]);
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
};



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);