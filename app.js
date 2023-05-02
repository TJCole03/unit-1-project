// import Deck from './deck.js'
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

//CLASSES

//OBJECTS AND ARRAYS

let stock =  [];
let waste = [''];
let foundations = {
    spade: [],
    diamond: [],
    club: [],
    heart: [],
}
let tableau = {
     arr0: [],
     arr1: [],
     arr2: [],
     arr3: [],
     arr4: [],
     arr5: [],
     arr6: [],
}

const startGame = document.querySelector('.start-button');
const stockDeck = document.getElementById('#stock');
const wasteDeck = document.getElementById('#waste');
const foundationTable = document.getElementById('#foundations');
const foundSpade = document.getElementsByClassName('.spade');
const foundDiamond = document.getElementsByClassName('.diamond');
const foundClub = document.getElementsByClassName('.club');
const foundHeart = document.getElementsByClassName('.heart');


//EVENT LISTENERS

startGame.addEventListener('click', function () {
  
    //dealCards();
    console.log('clicked')
});

function dealCards() {
    const dealCards = stock.concat(deck);
    
    return dealCards; 
}


