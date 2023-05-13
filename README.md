Solitaire

Basic Solitaire/Klondike card game.

HTML/CSS/JS. 

Flip over and move around cards to create runs of successive numbers, alternating colors of suits. 

Get ace card in foundation, then build up foundation piles based on deck. 

Game is won by overturning all cards and moving them to the foundation. 

Wireframe: 

https://excalidraw.com/ 

excalidra![excalidraw](https://github.com/TJCole03/unit-1-project/assets/125562166/5a48c88a-60e3-4174-abc3-20198f3e176e)
w.png 

Game Start 
![Solitaire_start](https://github.com/TJCole03/unit-1-project/assets/125562166/107d4e96-caa4-4244-82aa-b122905390bb)
Cards Out Top of Screen 
![Solitaire_cards_out](https://github.com/TJCole03/unit-1-project/assets/125562166/075e6d7e-889d-4dee-937f-6fdd1efcfc4a)

Cards Out Bottom of Screen
![Cards_out_bottom](https://github.com/TJCole03/unit-1-project/assets/125562166/01c2bf9a-7c31-46f8-8edc-be07d5655a76)

Stock Deck Clicked
![Solitaire_stock](https://github.com/TJCole03/unit-1-project/assets/125562166/ebc73b61-5550-4abe-be16-95b949c3d82d)

https://tjcole03.github.io/unit-1-project/

https://replit.com/@TJCole/Solitaire-Pseudocode#index.html 

For the future: 
1. Improve deck of cards for easier accessibility 
2. Implement drag and drop logic with color/suit sensing conditionals 
3. Create stacking effect in tableau
4. Fenagle my CSS to get values and suits in corners of cards
5. Add win/lose logic by using conditionals 















































<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mogra&display=swap" rel="stylesheet">
    <title>Document</title>
    <!-- <script src="deck.js" defer ></script> -->
    <script defer src="app.js" ></script>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<header> "Solitare" </header>

<button class="start-button">Start "Game"</button>

    <container id="table">
        <top id="table-top">

    <section id="foundation" > 

            <div class="spade" ondrop="drop_handler(ev)"
        ondragover="dragover_handler(ev)" ondragend="dragend_handler(ev)">♠️</div>
            <div class="heart" ondrop="drop_handler(ev)"
        ondragover="dragover_handler(ev)" ondragend="dragend_handler(ev)">♥️</div>
            <div class="club" ondrop="drop_handler(ev)"
        ondragover="dragover_handler(ev)" ondragend="dragend_handler(ev)">♣️</div>
            <div class="diamond" ondrop="drop_handler(ev)"
        ondragover="dragover_handler(ev)" ondragend="dragend_handler(ev)">♦️</div>
         
    </section>

        <div class="waste" id="waste-card" draggable="true" >Waste</div>

        <div class="stock" draggable="true">Stock</div>

        <div class="main-container" draggable="true">
            <div class="card" id="card" draggable="true">
                <div class="card-front" draggable="true" toggleAttribute(".card-back")></div>
                <div class="card-back" draggable="true" toggleAttribute(".card-front")></div>
            </div>
        </div>
         
        
        </top>

        <div class="tableau">
            <ul id="tab" class="tab">
            <li class="space" id="space-1" > <ul ></ul> </li>
            <li class="space" id="space-2" >  <ul ></ul> </li>
            <li class="space" id="space-3" >  <ul ></ul> </li>
            <li class="space" id="space-4" > <ul ></ul> </li>
            <li class="space" id="space-5" >  <ul ></ul> </li>
            <li class="space" id="space-6" > <ul ></ul> </li>
            <li class="space" id="space-7" > <ul></ul> </li>
            </ul>
        </div>

     


    </container> 


</body>
</html>

header {
    font-size: 45px;
    font-family: 'Calistoga', cursive;
    justify-content: center;
    justify-self: center;
}
button {
    display: flex; 
    width: 7.5%; 
    justify-content: center;
    align-content: center;
    justify-self: center;
    font-family: 'Mogra', cursive;

}
body {
    margin: 0;
    display: grid; 
}
/* sections */

#table {
    height: 75rem; 
    width: 100rem; 
    border: 1px solid black; 
    background-color: rgb(50, 150, 50);
    
}

#table-top {
    display: flex; 
    flex-direction: row;
}

section{
    display: flex;
    flex-direction: flex-start;
    border: 1px solid black; 
    background-color: rgb(41, 123, 41);
    height: 15rem; 
    width: 40rem;
    padding: 1px;
}

#foundation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 50rem;
    height: 13rem;
    background-color: rgba(74, 87, 108, 0.631);
    margin: 5px;
    font-family: 'Mogra', cursive;
    color:rgba(243, 246, 227, 0.999);
    align-content: center;
    justify-content: center;
    justify-items: center;
    border: 1px solid black;
} 

.spade, .heart, .club, .diamond {
    border: 1px solid black;
    border-radius: .5rem;
    height: 11rem;
    width: 8rem;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;

}


.stock {
    font-family: 'Calistoga', cursive;
    display: flex;
    height: 11rem; 
    width: 10rem; 
    border: 1px solid black; 
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    color: rgba(243, 246, 227, 0.999);
    cursor: pointer;
}

.waste {
    font-family: 'Calistoga', cursive;
    display: flex; 
    height: 11rem; 
    width: 10rem; 
    display: flex; 
    justify-content: center;
    align-items: center;
    border: 1px solid black; 
    border-radius: .5rem;
    right: 200px;
    padding: 1px;
    cursor: pointer;
}

#waste, #stock {
    align-self: flex-start;
}

.tableau {
    display: flex;
}

.tab {
    display: flex;
}

 /* #tableau > div {
    height: 15rem; 
    width: 10rem; 
    border: 1px solid black;
    display: inline-block;
    cursor: pointer;
}  */

.space {
    height: 9rem; 
    width: 9rem; 
    color: black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    display: inline-block; 
    flex-direction: row;
}

/* @layer .space-2 {
    main {
        display: grid;
    }
}

@layer {
    
} */

/* cards */

    .hide {
        display:none; 
    }


 /* .card-front, .card-back  {
        position: relative;
        height: 11rem;
        width: 10rem;
        border: 1px solid black;
        border-radius: .5rem;
        display: flex; 
        justify-content: center;
        align-items: center; 
    }   */

    .card {
        display: none;
    }
  .card-back {
    height: 8rem; 
    width: 7rem; 
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
    cursor: pointer;
}  

/* .card-front:hover {
    transform: rotateY(180deg);
} */

.card-front  {
    position: relative;
    height: 8rem;
    width: 7rem;
    border: 1px solid black;
    border-radius: .5rem;
    display: flex; 
    justify-content: center;
    align-items: center; 
    font-size: 4rem;
    background-color: rgba(15, 89, 209, 0.999);;
    cursor: pointer;
}

.card.red {
    color: red;
    background-color: white;
}
.card.black {
    color: black; 
    background-color: white;
}

.card-front::before, .card-front::after { /* before and after the NUMBER and SUIT not the flip */
    position: absolute;
    content: attr(data-value);
    font-size: 1rem; 
}

.card-front::before {
    top: .5rem; 
    left: .5rem;
}

.card-front::after {
    bottom: .5rem; 
    right: .5rem;
    transform: rotate(180deg);
}

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
        
    
