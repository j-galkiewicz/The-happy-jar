
var quoteList = "";
var randomQuote = "";
var html = "";
var quoteBody = document.querySelector("#quote-body");
var quote = document.querySelector("#quote");
var button = document.querySelector("#quote-btn");


//array with quotes
var quotes = [
    { 
     text: "I am proud of your strenght",
    },
    {
     text: "You have a beautifull mind and body", 
    },
    { 
     text: "I can talk to you about everythinf and it's always unforgettable" ,
    },
    { 
     text: "Do what you can, with what you have, where you are", 
    },
    { 
     text: "You are capable and strong", 
    },
    { 
     text: "I adore your voice", 
    },
    { 
     text: "You are a great actor", 
    },
    { 
     text: "You are loved and needed", 
    },
    { 
     text: "Here are a lot of people who deeply care for you", 
    },
    { 
     text: "You are the most inteligent man I know" ,
    }
    ]

//mix the cards
function mixing() {
    quoteList = Object.keys(quotes);
        randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
        console.dir(mixing);

}
    //presenting the quote on the page
    function showQuote() {
        mixing();
    

    //create an element to present the quote
    html = `<p id="quote"></p>` + 
            quotes[randomQuote].text;

        //Show the element with a quote on the page
        quoteBody.innerHTML = html;

}
showQuote();

//Show a new quote on click
button.onclick = function() {
    showQuote();
}

