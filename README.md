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

function shuffle() {

        //for 1000 turns
        //switch values of two random cards
        for (let i = 0; i < 1000; i++){
            let spot1 = Math.floor((Math.random() * deck.length));
            let spot2 = Math.floor((Math.random() * deck.length));
            let tmp = deck[spot1]
    
            deck[spot1] = deck[spot2];
            deck[spot2] = tmp;
        }
    shuffle(deck);
}
    
console.log(deck)
console.log(shuffle(deck))

<div class="deck">
    <h1>A Deck of Cards</h1>

    <a href="javascript:void(0)" class="btn" onclick="renderDeck()">Start Game</a>
    <div id="deck"></div>
</div>

.deck .card {
    border: solid 1px #aaa; 
    border-radius: 9px;
    width: 95px; 
    height: 150px; 
    float: left; 
    background-color: white;
    padding: 3px, 3px, 3px, 3px;
    margin: 5px; 
}

.card2 {
    width: 50px; 
    padding: 10px; 
    border: solid 1px #808080; 
    background-color: white;
    display: inline-block;
    border-radius: 10px;
    font-size: 22px;
    text-align: center;
    margin: 3px;
    border: solid 3px;
}

.card .value {
    font-size: 15pt;
    font-family: sans-serif;
}

.card .suit {
    background-image: url('https://www.thatsoftwaredude.com/images/post/0f631eeb-6c4a-4bfd-9f86-e0a08ae8584b.png');
    height: 100px; 
    width: 90px; 
}

.card .diamonds {
    background-position-y: 100px;
}

.card .hearts {
    background-position-x: 90px;
}

.card .clubs {
    background-position-x: 90px;
    background-position-y: 100px;
}

table {
    height: 100rem; 
    width: 150rem; 
    border: 1px solid black; 
    background-color: rgb(50, 150, 50);
    position: realtive;
    display: flex;
}

#foundation{
    display: flex;
    flex-direction: flex-start;
    border: 1px solid black; 
    background-color: rgb(41, 123, 41);
    height: 15rem; 
    width: 40rem;
    padding: 1px;
}

#waste {
    display: flex;
    height: 15rem; 
    width: 12rem; 
    border: 1px solid red; 
    position: absolute;
    right: 200px;
    padding: 1px;
}

#stock {
    display: flex;
    height: 15rem; 
    width: 12rem; 
    border: 1px solid black; 
    margin-left: auto; 
    padding: 1px;
    
}


#tableau > div {
    height: 15rem; 
    width: 10rem; 
    border: 1px solid black;
    display: inline-block;
    margin-top: 18rem;
    margin-right: 400px;
    margin-left: -350px;
}

#foundation{
    display: flex;
    flex-direction: flex-start;
    border: 1px solid black; 
    background-color: rgb(41, 123, 41);
    height: 15rem; 
    width: 40rem;
    padding: 1px;
}

#waste {
    display: flex;
    height: 15rem; 
    width: 12rem; 
    border: 1px solid red; 
    position: absolute;
    right: 200px;
    padding: 1px;
}

#stock {
    display: flex;
    height: 15rem; 
    width: 12rem; 
    border: 1px solid black; 
    margin-left: auto; 
    padding: 1px;
    
}


#tableau > div {
    height: 15rem; 
    width: 10rem; 
    border: 1px solid black;
    display: inline-block;
    margin-top: 18rem;
    margin-right: 400px;
    margin-left: -350px;
    ;
}


button that deals cards in appropritate divs and w/ appropriate amounts 
click button 
grab deck

divide like so: split? splice? slice? 
arr 1 = 1 card 
arr 2 = 2
arr 3 = 3
arr 4 = 4
arr 5 = 5
arr 6 = 6
arr 7 = 7
stock = 24