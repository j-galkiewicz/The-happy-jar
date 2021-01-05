//variable declaration
var quoteList = "";
var randomQuote = "";
var html = "";
var quoteBody = document.querySelector("#quote-body");
var quote = document.querySelector("#quote");
var button = document.querySelector("#quote-btn");


//an array with quotes
var quotes = [
    { 
     text: "I am proud of your strength",
    },
    {
     text: "You have a beautifull mind and body", 
    },
    { 
     text: "I can talk to you about everything and it's always unforgettable" ,
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
     text: "You are awsome", 
    },
    { 
     text: "You are so kind", 
    },
    { 
     text: "I trust you", 
    },
    { 
     text: "Your strength is inspiring", 
    },
    { 
     text: "You have such a good heart", 
    },
    { 
     text: "You always know exactly what to say", 
    },
    { 
     text: "You're a great listener", 
    },
    { 
     text: "I am a better person because of you", 
    },
    { 
     text: "You have taught me so much", 
    },
    { 
     text: "You are giving the best hugs", 
    },
    { 
     text: "You don't need to change", 
    },
    { 
     text: "I love when you sing", 
    },
    { 
     text: "I hope you are proud of yourself, because I am!", 
    },
    { 
     text: "You have the best ideas", 
    },
    { 
     text: "You can fix everything", 
    },
    { 
     text: "You have amazing creative potential", 
    },
    { 
     text: "I tell everyone how amazing you are", 
    },
    { 
     text: "I love spending time with you", 
    },
    { 
     text: "I love you", 
    },
    { 
     text: "You always able to find a good solution", 
    },
    { 
     text: "Your voice is so damn good", 
    },
    { 
     text: "You are a great skater", 
    },
    { 
     text: "You have the capacity to accomplish everything you want", 
    },
    { 
     text: "You are an excellent friend", 
    },
    { 
     text: "Your voice is much better then Beczala's", 
    },
    { 
     text: "You are fixing my wings", 
    },
    { 
     text: "You inspire a lot of people", 
    },
    { 
     text: "You are the best Son", 
    },
    { 
     text: "You are a great dog owner", 
    },
    { 
     text: "Your inside is even more beautiful than your outside", 
    },
    { 
     text: "You are enough", 
    },
    { 
     text: "Your inside is even more beautiful than your outside", 
    },
    { 
     text: "Here are a lot of people who deeply care for you", 
    },
    { 
     text: "You are the most inteligent man I know",
    }
    ]

//to mix the cards
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

