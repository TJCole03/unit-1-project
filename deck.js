//https://www.youtube.com/watch?v=h3ehO5QMNu4  https://www.youtube.com/watch?v=NxRwIZWjLtE //will use this one 

// class Card {
//     constructor(suit, value) {
//         this.suit = suit; 
//         this.value = value; 
//     }
// }

// class Deck {
//     constructor() {
//         this.deck = [];
//     }


//     createDeck(suits, values) {
//         for (let suit of suits) {
//             for (let value of values) {
//                 this.deck.push(new Card(suit, value));
//             }
//         }
//         return this.deck;
//     }

//     shuffle() {
//         let counter = this.deck.length, temp, i;

//         while (counter) {
//             i = Math.floor(Math.random() * counter--); 
//             temp = this.deck[counter];
//             this.deck[counter] = this.deck[i];
//             this.deck[i] = temp; 
//         }
//         return this.deck;
//     }

//     deal() { 
        
//     }

// }

// let suits = ['H', 'D', 'C', 'S'];
// let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// let deck = new Deck();
// deck.createDeck(suits, values)
// deck.shuffle()

// //  function renderDeck(deck) {
// //     document.getElementById("deck").innerHTML = "";

// //     for (let i = 0; i < deck.length; i++) {
// //         let card = document.createElement("div");
// //         let value = document.createElement("div");
// //         let suit = document.createElement("div");
// //         card.className = "card";
// //         value.className = "value";
// //         suit.className = "suit " + deck[i].Suit;

// //         value.innerHTML = deck[i].Value;
// //         card.appendChild(value);
// //         card.appendChild(suit);

// //         document.getElementById("deck").appendChild(card);
// //     }
// //      return this.deck;
// // }


const SUITS = ["♠️", "♣️", "♥️", "♦️"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


export default class Deck {
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
