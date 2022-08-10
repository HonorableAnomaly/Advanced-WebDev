// function makeDeck() {
//   const deck = [];
//   const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
//   const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

// Reusable example
const myDeck = {
  deck: [],
  suits: ["Hearts", "Spades", "Diamonds", "Clubs"],
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
    return deck;
  },
  drawCard() {
    return this.deck.pop();
  },
};
