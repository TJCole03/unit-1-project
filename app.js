// import Deck from './deck.js'
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

//CLASSES

//VARIABLES 
let stockDeck = []
const startGame = document.querySelector('.start-button');

//EVENT LISTENER 

startGame.addEventListener('click', function(dealCards) {
    console.log('clicked');
});

function dealCards() {
    stockDeck = document.querySelector("stock")
    stockDeck = document.createElement()
}


