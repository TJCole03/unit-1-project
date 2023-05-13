// import Deck from './deck.js'
const SUITS = ["♠️", "♣️", "♥️", "♦️"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

//https://www.youtube.com/watch?v=NxRwIZWjLtE&t=1900s


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
const startPile = [];
const stockPile =  [];
const wastePile = [];

const spadeFound = [];
const heartFound = [];
const clubFound = [];
const diamondFound = [];

const foundations = [spadeFound, heartFound, clubFound, diamondFound]

const arr0 = [];
const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];

const tableau = [arr0, arr1, arr2, arr3, arr4, arr5, arr6];

//what i've used so far 
const startGame = document.querySelector('.start-button');
const spaces = document.querySelectorAll('.space')
const col1 = document.querySelector('#space-1');
const col2 = document.querySelector('#space-2');
const col3 = document.querySelector('#space-3');
const col4 = document.querySelector('#space-4');
const col5 = document.querySelector('#space-5');
const col6 = document.querySelector('#space-6');
const col7 = document.querySelector('#space-7');
const columns = [col1, col2, col3, col4, col5, col6, col7];
const playingCard = document.getElementById('#card');
// const cardBack = document.querySelector('.card-back');
const cardFront = document.querySelector('.card-front');
const stock = document.querySelector('.stock');
const waste = document.querySelector('.waste');
const wasteCard = document.querySelector('#wasteCard')
const tableauEl = document.querySelector('.tableau');
const tableauEls = document.querySelector('.tab');
const spade = document.querySelector('.spade');
const diamond = document.querySelector('.diamond');
const club = document.querySelector('.club');
const heart = document.querySelector('.heart');


startGame.addEventListener('click', function () {
    
    dealCards();
    console.log('clicked', [stockPile], [arr6], [arr5], [arr4], [arr3], [arr2], [arr1], [arr0]);
});

//DEALING CARDS IN APPROPRIATE PLACES

function dealCards() {
    for (cards in deck) {
        //deck.cards.length -= 24;
        //deck.cards.splice(0, 24);
        const deal = stockPile.push(deck.cards.splice(0,24));//can push 24 cards to stock array but cant ge
        console.log(deck.cards)
        const deal2 = arr6.push(...deck.cards.splice(0,7));//7
        //console.log(deck.cards.length)
        const deal3 = arr5.push(...deck.cards.splice(0, 6)); //6
        //console.log(deck.cards.length)
        const deal4 = arr4.push(...deck.cards.splice(0,5)); //5
        const deal5 = arr3.push(...deck.cards.splice(0,4)); //4
        const deal6 = arr2.push(...deck.cards.splice(0,3)); //3
        const deal7 = arr1.push(...deck.cards.splice(0,2)); //2
        const deal8 = arr0.push(...deck.cards.splice(0,1)); //1
    
        
    } 
    renderCards();
    flipLastCard();
}

function renderCards() {
    columns.forEach((column, idx) => {

        stock.textContent = stockPile.suit + stockPile.value;
        stock.classList.add('card-back');
        stock.setAttribute("node", "card-front")
        const arr = tableau[idx]
        //console.log(arr)
        arr.forEach((card, i) => {
            const cardDiv = document.createElement('div')
            cardDiv.textContent = card.suit + card.value
            cardDiv.classList.add('card-back'); 
            tableau[idx][i].node = cardDiv;
            cardDiv.setAttribute('draggable', "true")
            // cardDiv.getAttribute("class", "card-front")
            column.append(cardDiv)
            
        })   
        
    })
}

function flipLastCard() {
        arr0[arr0.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr0[arr0.length - 1])
    
        arr1[arr1.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr1[arr1.length - 1]
    )
        arr2[arr2.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr2[arr2.length - 1])
    
        arr3[arr3.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr3[arr3.length - 1])
    
        arr4[arr4.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr4[arr4.length - 1])
    
        arr5[arr5.length -1].node.classList.replace('card-back', 'card-front');           
    console.log(arr5[arr5.length - 1])
    
    arr6[arr6.length - 1].node.classList.replace('card-back', 'card-front'); 
    console.log(arr6[arr6.length  -1])
}
//FLIPPING OVER STOCK PILE 

stock.addEventListener('click', function () {
    flipOverStock();
     console.log('clicked')
})

function flipOverStock() {
    if (stockPile[0].length > 0) {
        stockPile[0].shift(stockPile[0][0]);
        let wasteCard = document.createElement('div')
        wasteCard = wastePile.push(stockPile[0][0]);
        //wastePile.node = wasteCard
        //displaying card in wastePile
        wastePile.forEach((card) => {
            //wastePile.node = wasteCard
            waste.textContent = card.suit + card.value;
            waste.append('.card-front');
        });
    } else {
        if (stockPile[0].length === 0) {
            //wastePile.replace(cardFront, )
            stockPile[0].push(wastePile['every'])
        }
    }
}

// tableauEls.addEventListener('click', flipCards); {
 
// }

// function flipCards() {
//     arr1[0].node.classList.replace('card-back', 'card-front');

//     arr2[0].node.classList.replace('card-back', 'card-front');
//     arr2[1].node.classList.replace('card-back', 'card-front');

//     arr3[0].node.classList.replace('card-back', 'card-front');
//     arr3[1].node.classList.replace('card-back', 'card-front');
//     arr3[2].node.classList.replace('card-back', 'card-front');

//     arr4[0].node.classList.replace('card-back', 'card-front');
//     arr4[1].node.classList.replace('card-back', 'card-front');
//     arr4[2].node.classList.replace('card-back', 'card-front');
//     arr4[3].node.classList.replace('card-back', 'card-front');

//     arr5[0].node.classList.replace('card-back', 'card-front');
//     arr5[1].node.classList.replace('card-back', 'card-front');
//     arr5[2].node.classList.replace('card-back', 'card-front');
//     arr5[3].node.classList.replace('card-back', 'card-front');
//     arr5[4].node.classList.replace('card-back', 'card-front');
    
//     arr6[0].node.classList.replace('card-back', 'card-front');
//     arr6[1].node.classList.replace('card-back', 'card-front');
//     arr6[2].node.classList.replace('card-back', 'card-front');
//     arr6[3].node.classList.replace('card-back', 'card-front');
//     arr6[4].node.classList.replace('card-back', 'card-front');
//     arr6[5].node.classList.replace('card-back', 'card-front');

// }


tableauEl.addEventListener('dragstart', dragstart_handler); 
tableauEl.addEventListener('dragend', dragend_handler);
spade.addEventListener('drop', drop_handler); 
heart.addEventListener('drop', drop_handler); 
club.addEventListener('drop', drop_handler); 
diamond.addEventListener('drop', drop_handler); 

    function dragstart_handler(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.textContent)
        console.log(ev.target)
    }

    function dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move'
    }

function dragend_handler(ev) {
    ev.preventDefault();
    
    function checkText(text) {
        const arr = [arr0, arr1, arr2, arr3, arr4, arr5, arr6];
        if (arr[0] <= 10) {
            ev.target.append(document.getElementById('#foundation'))
            }
     
    }
    checkText();
}

    function drop_handler(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text/plain');
        console.log(data)
        //ev.target.append(document.getElementById('#black-hole'))
        }
        













