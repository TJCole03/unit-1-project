// import Deck from './deck.js'
const SUITS = ["♠️", "♣️", "♥️", "♦️"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) { 
            const newIndex = Math.floor(Math.random() * (i + 1)) //gives us placement inside deck that is somewhere else; 
            const oldValue = this.cards[newIndex] //flip values at new index w/ current index
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit; 
        this.value = value; 
    }
}

function newDeck() {
    return SUITS.flatMap(suit => { //condenses multiple arrays in arrays into one array. returns an array of arrays, 
        return VALUES.map(value => { //loop through all our values and map them into array. and then condenses it into a single array 
            return new Card(suit, value)
        })
    })
}

function getColor() {
    return this.suit === "♣️" || this.suit == "♠️" ? 'black' : 'red';
}

function getHTML() {
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
}

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)



//CLASSES

//OBJECTS AND ARRAYS
let startPile = [];
let stock =  [];
let waste = [''];
let foundations = {
    spade: [],
    diamond: [],
    club: [],
    heart: [],
}
let tableau = [
     ['0'],
     ['1'],
     ['2'],
     ['3'],
     ['4'],
     ['5'],
     ['6'],
]

const startGame = document.querySelector('.start-button');
const stockDeck = document.getElementById('#stock');
const wasteDeck = document.getElementById('#waste');
const strtPile = document.getElementById('#start-pile');
const playDeck = document.getElementsByClassName('.deck')
const foundationTable = document.getElementById('#foundations');
const foundSpade = document.getElementsByClassName('.spade');
const foundDiamond = document.getElementsByClassName('.diamond');
const foundClub = document.getElementsByClassName('.club');
const foundHeart = document.getElementsByClassName('.heart');


//EVENT LISTENERS

//Getting shuffled deck of cards to a placeholder array; will move to appropriate array later on
startGame.addEventListener('click', function () {
    
    //dealCards();
    console.log('clicked',dealCards(), [stock])
});

function dealCards() {
    for (cards in deck) {
        deck.cards.length -= 28;
        //deck.cards.length -= 7;
        const deal = stock.push(deck.cards);
        //const tableau = tableau[7].push(deck.cards)
        return deal; 
    }
    
    //cards.concat(stock)
    
}

//Rendering deck
//24 in stock 
//arr0-arr6: 1,2,3,4,5,6,7 cards respictively
// function renderCards() {
//     playDeck = 
// }


//move cards using slice??
//click card in middle of pile
//slice the array/number of cards in selection 
//enable drag and drop logic
//drop logic will have either a map or push function
