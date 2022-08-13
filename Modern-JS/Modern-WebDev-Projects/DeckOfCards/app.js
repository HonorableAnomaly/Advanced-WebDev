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
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMany(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle(arr) {
    const { deck } = this;
    // Loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // Pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

// Factory example (uses the above example within a function)
const makeDeck = () => {
  return {
    deck: [],
    suits: ["Hearts", "Spades", "Diamonds", "Clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMany(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle(arr) {
      const { deck } = this;
      // Loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        // Pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const firstDeck = makeDeck();
firstDeck.initializeDeck();
firstDeck.shuffle();

const secondDeck = makeDeck();
secondDeck.initializeDeck();

// NOT THE CLEANEST WAY TO DO THIS!
