// My example
function getCard() {
  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  for (let s of suits) {
  }
  for (let v of values) {
  }
  let card = { suit, value };
  return card;
}

// Mixed example case #1
function getCard1() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const vIndex = Math.floor(Math.random() * values.length);
  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  const sIndex = Math.floor(Math.random() * suits.length);
  let card = {
    value: values[vIndex],
    suit: suits[sIndex]
  };
  return card;
  //   return `${values[vIndex]} of ${suits[sIndex]}`;
}

// Example case #2
function getCard2() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const vIndex = Math.floor(Math.random() * values.length);
  const value = values[vIndex];

  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  const sIndex = Math.floor(Math.random() * suits.length);
  const suit = suits[sIndex];
  return { value, suit };
}

// Example case #3
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard3() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  const value = pick(values);
  const suit = pick(suits);
  return { value, suit };
}

// Example case #4
// Using pick function above

function getCard4() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  return { value: pick(values), suit: pick(suits) };
}
