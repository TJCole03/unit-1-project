
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

const suits = ['Hr','Cb','Dr','Sb']; //r = red, b = black
const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function getDeck() {
    let deck = new Array();
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < rank.length; x++) {
            //console.log(rank[rankCounter] + suits[suitCounter]);
            let card = { Rank: rank[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
    
}
let deck = [{Rank: 'A', Suit: 'Spades'}, {Rank: 'A', Suit: 'Diamonds'}, {Rank: 'A', Suit: 'Clubs'}...]

