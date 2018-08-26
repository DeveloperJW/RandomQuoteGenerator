// FSJS - Random Quote Generator
//variable created for auto refresh extra credit
let c = 0, t;

// Create the array quotes, containing multiple objects.
let quotes=[
    {
        quote:"Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.",
        source:"Mark Twain",
        citation:"eduro.com",
        year:"decades ago",
        // additional property added for Extra Credit
        // a profile picture of the source will be displayed to the page
        // and users are able to click the profile picture to learn more about the author of the quote
        img:"img/Mark_Twain.jpg",
        link:"https://en.wikipedia.org/wiki/Mark_Twain",
    }, {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        source:"Francis of Assisi",
        img: "img/Francis.jpg",
        link: "https://en.wikipedia.org/wiki/Francis_of_Assisi",
    }, {
        quote:"Believe you can and you're halfway there.",
        source:"Theodore Roosevelt",
        year:"decades ago",
        img:"img/Roosevelt.jpg",
        link:"https://en.wikipedia.org/wiki/Theodore_Roosevelt",
    }, {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        source:"Confucius",
        citation: "google",
        img:"img/KongZi.png",
        link:"https://en.wikipedia.org/wiki/Confucius",
    }, {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source:"Thomas A. Edison",
        img:"img/Thomas_Edison.jpg",
        link:"https://en.wikipedia.org/wiki/Thomas_Edison",
    },{
        quote:"It's better to walk thousands of miles than to read thousands of books.",
        source:"QiChang Dong",
        citation:"Baidu.com",
        year:"thousands years ago",
        img:"img/DongQiChang.jpg",
        link:"https://en.wikipedia.org/wiki/Dong_Qichang",
    },{
        quote:"Be yourself; everyone else is already taken.",
        source:"Oscar Wilde",
        citation:"google",
        year: 1900,
        img:"img/Oscar_Wilde.jpg",
        link:"https://en.wikipedia.org/wiki/Oscar_Wilde",
    },{
        quote:"A day without sunshine is like, you know, night.",
        source:"Steve Martin",
        img:"img/Steve_Martin.jpg",
        link:"https://en.wikipedia.org/wiki/Steve_Martin",
    },
];

// background color array created for changing the background color when user click the button
let bg_color=["#6B5B95", "#7F4145", "#3F69AA","#766F57", "#E47A2E", "#6F9FD8","#485167","#BC70A4"];


/**
 * The function getRandomQuote takes a array as input and return a random element from the array
 */
function getRandomQuote(array) {
    // generate a random number from 0 to the length of the parameter array
    let randomNum=Math.floor(Math.random()*array.length);
    return array[randomNum];
}


/**
 * The function printQuote calls the function getRandomQuote and take our global variable quotes as input
 * the function will display the random quote to web page and change the background color randomly from bg_color array
 */
const printQuote= ()=>{
    let randomQuoteObject=getRandomQuote(quotes);
    /** Purpose of this design:
     * allow users to view a profile img of the author of the quote showed on the screen
     * if the user wants to learn more about the author, they can click on the img and be directed to wiki page
     * of the author
     * stringOfProfileImg is used to Use the new properties img and link
     * I have created to conditionally add to the string that gets printed to the screen.
     */
    let stringOfProfileImg=`<a href=${randomQuoteObject['link']} target="_blank">
    <img src=${randomQuoteObject['img']} alt="Photo of author" class="profile-image"></a>
    <p class="tag location">Click the profile img to learn more about the author of this quote.</p>
    `;
    // source-profile is the id of header from index.html
    document.getElementById('source-profile').innerHTML = stringOfProfileImg;

    let stringOfQuoteProperties =
        `<p class='quote'> ${randomQuoteObject['quote']}</p>
        <p class='source'>${randomQuoteObject['source']}
        `;
    // since citation and year are optional, conditional statement is needed as followings:
    if (randomQuoteObject['citation'] !== undefined) {
        stringOfQuoteProperties += `<span class='citation'> ${randomQuoteObject['citation']}</span>`;
        if (randomQuoteObject['year'] !== undefined) {
            stringOfQuoteProperties += `<span class='year'> ${randomQuoteObject['year']} </span>`;
            stringOfQuoteProperties += "</p>";//closed paragraph tag
        }//end of year check if statement
    }//end of if statement
    else {
        stringOfQuoteProperties+="</p>";//if both citation and year are empty, the paragraph tag is closed.
    }
    //display quote to index.html by calling innerHTML
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
    // change the background color of body when user click the button
    // a random color will be selected from bg_color array and assign to the body of index.html
    document.querySelector('body').style.backgroundColor = getRandomQuote(bg_color);
    //auto refresh the quote after 20 seconds
    // each time when user click the button, we need to reset the c to 0 and stop the last count to avoid duplication
    // then we start to count
    c=0;
    stopCount();
    startCount();
};

/**
 * function created for auto refresh extra credit
 */
function startCount() {
    c = c + 1;
    t = setTimeout(startCount, 1000);
    // if the inactive time is over 20 seconds, we call the printQuote() function to print a new quote
    if (c > 20){
        printQuote();
    }
}

/**
 * stopCount is created to reset inactive time counting each time when user click the button
 */
function stopCount() {
    clearTimeout(t);
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// when the user open the web page and haven't click for 20 seconds, we call the setTimeOut and generate a new quote
// the setTimeout will be called first time when the page is loaded up
//  setTimeout(printQuote,20000);
startCount();
