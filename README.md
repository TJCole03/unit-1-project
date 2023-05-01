// class Cards {
//     constructor(for(let i = 1; i < 13; i++), color) {
//     this.color = color

//     }
// }

// class Spade extends Cards {
//     constructor(..args) {
//         this.color = black; 
//     }
// }

// class Club extends Cards {
//     constructor(..args) {
//         this.color = black; 
//     }
// }
// class Heart extends Cards {
//     constructor(..args) {
//         this.color = red; 
//     }
// }
// class Diamond extends Cards {
//     constructor(..args) {
//         this.color = red; 
//     }
// }

//making the cards https://www.youtube.com/watch?v=LxXWTXOny3A, https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

// const suits = ['Hr','Cb','Dr','Sb']; //r = red, b = black
// const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// //let deck = [];

// function getDeck() {
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++) {
//         for (let x = 0; x < rank.length; x++) {
//             //console.log(rank[rankCounter] + suits[suitCounter]);
//             let card = { Rank: rank[x], Suit: suits[i] };
//             deck.push(card);
//         }
//     }
//     return deck;
// }


// function shuffle(deck) {

//     //for 1000 turns
//     //switch values of two random cards
//     for (let i = 0; i < 1000; i++){
//         let spot1 = Math.floor((Math.random() * deck.length));
//         let spot2 = Math.floor((Math.random() * deck.length));
//         let tmp = deck[spot1]

//         deck[spot1] = deck[spot2];
//         deck[spot2] = tmp;
//     }
// }

// function renderDeck(deck) {
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
// }

