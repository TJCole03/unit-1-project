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

// function getHTML() {
//     const cardDiv = document.createElement('div')
//     cardDiv.innerText = this.suit
//     cardDiv.classList.add("card", this.color)
//     cardDiv.dataset.value = `${this.value} ${this.suit}`
//     return cardDiv
// }

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)



//CLASSES

//OBJECTS AND ARRAYS
const startPile = [];
const stockPile =  [];
const wastePile = [];

const foundations = {
    spade: [],
    diamond: [],
    club: [],
    heart: [],
}

const arr0 = [];
const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];


//what I haven't used 

//const strtPile = document.getElementById('#start-pile');
const playDeck = document.getElementsByClassName('.deck')
const foundationTable = document.getElementById('#foundations');
const foundSpade = document.getElementsByClassName('.spade');
const foundDiamond = document.getElementsByClassName('.diamond');
const foundClub = document.getElementsByClassName('.club');
const foundHeart = document.getElementsByClassName('.heart');

//what i've used so far 
const startGame = document.querySelector('.start-button');
const col1 = document.querySelector('.space-1');
const col2 = document.querySelector('.space-2');
const col3 = document.querySelector('.space-3');
const col4 = document.querySelector('.space-4');
const col5 = document.querySelector('.space-5');
const col6 = document.querySelector('.space-6');
const col7 = document.querySelector('.space-7');
const back = document.querySelector('.card-back');
const front = document.querySelector('.card-front');
const stock = document.querySelector('.stock');
const waste = document.querySelector('.waste');

// //card back

// const cardBackImgPath = '/timothycole/back_400w.png'
//EVENT LISTENERS

startGame.addEventListener('click', function () {
    
    dealCards();
    console.log('clicked', dealCards(), [stockPile], [arr6], [arr5], [arr4], [arr3], [arr2], [arr1], [arr0], renderCards());
});
//DEALING CARDS IN APPROPRIATE PLACES

function dealCards() {
    for (cards in deck) {
        //deck.cards.length -= 24;
        //deck.cards.splice(0, 24);
        const deal = stockPile.push(...deck.cards.splice(0, 24));//can push 24 cards to stock array but cant ge
        //console.log(deck.cards)
        const deal2 = arr6.push(...deck.cards.splice(0, 7));//7
        //console.log(deck.cards.length)
        const deal3 = arr5.push(...deck.cards.splice(0, 6)); //6
        //console.log(deck.cards.length)
        const deal4 = arr4.push(...deck.cards.splice(0,5)); //5
        const deal5 = arr3.push(...deck.cards.splice(0,4)); //4
        const deal6 = arr2.push(...deck.cards.splice(0,3)); //3
        const deal7 = arr1.push(...deck.cards.splice(0,2)); //2
        const deal8 = arr0.push(...deck.cards.splice(0,1)); //1
        //return deal, deal2, deal3, deal4, deal5, deal6, deal7, deal8; 
        
    } 
    renderCards();
}

function renderCards() {
    for(cards in deck) {
        stock.textContent = stockPile.suit + stockPile.value;
        stock.classList.add('card-back');
        col1.textContent = arr0[0].suit + arr0[0].value
        col1.classList.add('card-front');
        col2.textContent = arr1[0].suit + arr1[0].value
        col2.classList.add('card-back');
        col3.textContent = arr2[0].suit + arr2[0].value
        col3.classList.add('card-back');
        col4.textContent = arr3[0].suit + arr3[0].value
        col4.classList.add('card-back');
        col5.textContent = arr4[0].suit + arr4[0].value
        col5.classList.add('card-back');
        col6.textContent = arr5[0].suit + arr5[0].value
        col6.classList.add('card-back');
        col7.textContent = arr6[0].suit + arr6[0].value
        col7.classList.add('card-back');
    }
}


//

//Clicking on stockPile and removing one card at a time from array and pushing it to wastepile

// stock.addEventListener('click', function () {
    
//     console.log('clicked')
// });

// function flipStockCards() {
//     stock.
// }