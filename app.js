import Deck from './deck.js'
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)


stockDeck = document.querySelector("stock")
stockDeck.appendChild(deck.cards[0].getHTML())