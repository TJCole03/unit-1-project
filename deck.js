//https://www.youtube.com/watch?v=h3ehO5QMNu4  https://www.youtube.com/watch?v=NxRwIZWjLtE //will use this one 

class Card {
    constructor(suit, value) {
        this.suit = suit; 
        this.value = value; 
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }


    createDeck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--); 
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp; 
        }
        return this.deck;
    }

    deal() { 
        
    }

}

let suits = ['H', 'D', 'C', 'S'];
let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = new Deck();
deck.createDeck(suits, values)
deck.shuffle()

//  function renderDeck(deck) {
//     document.getElementById("deck").innerHTML = "";

//     for (let i = 0; i < deck.length; i++) {
//         let card = document.createElement("div");
//         let value = document.createElement("div");
//         let suit = document.createElement("div");
//         card.className = "card";
//         value.className = "value";
//         suit.className = "suit " + deck[i].Suit;

//         value.innerHTML = deck[i].Value;
//         card.appendChild(value);
//         card.appendChild(suit);

//         document.getElementById("deck").appendChild(card);
//     }
//      return this.deck;
// }
