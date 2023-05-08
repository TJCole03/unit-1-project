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

1. Card deck; process, challenges, references. https://www.youtube.com/watch?v=NxRwIZWjLtE&t=1899s; https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
    editiing the HTML to include card-front and card-back as extra divs
    making the deck in a separate JS file for other projects but moving it into app.js anyway because my intuition told me it was getting buggy 
2. Game board setup. How i separated my divs and table. how i used grid and flexbox. 
3. arrays
    getting into 8 different arrays 
    splice method 
    why i use arrays 
4. card rendering
    how an object like a card gets physically rendered on screen. 
        dot notation 
        not getting right cards up front/ does not reflect array; 


css and HTML for flip cards 

      <!-- <div class="card-flip">
                <div class="card-flip-inner">
                    <div class="card-flip-front card-front"></div>
                    <div class="card-flip-back card-back">Back</div>
                    
                    </div>
                </div>
            </div> -->
FLIPPING THE CARDS

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
 .card-flip {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;  /* Remove this if you don't want the 3D effect   */
} 
  
  /* This container is needed to position the front and back side */
  .card-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  } 
  
  /* Do an horizontal flip when you move the mouse over the flip box container */
   .card-flip:hover .card-flip-inner {
    transform: rotateY(180deg);
  }
   
  /* Position the front and back side */
  .card-flip-front, .card-flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /*Safari  */
    backface-visibility: hidden; 
} 
  
  /* Style the back side */
  .card-flip-back {
    height: 11rem; 
    width: 10rem; 
    border: 1px solid black; 
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: .0001rem; 
    border-radius: .5rem;
    color: rgba(243, 246, 227, 0.999);
    background-image: url('https://sothebys-md.brightspotcdn.com/53/65/0b797770488d85b54c3c2d1cfae1/047n10777-c6z6x-t2-01-cropped.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-display: none;
  } 

  /* Style the front side (fallback if image is missing) */
 .card-flip-front {
    height: 11rem; 
    width: 10rem; 
    border: 1px solid black; 
    font-size: 4rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-color: white;
  } 

  data-value="6 ♥️ 6♥️