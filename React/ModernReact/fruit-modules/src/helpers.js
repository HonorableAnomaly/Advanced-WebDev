import fruits from "./fruits";

function choice(items) {
  let choose = Math.floor(Math.random() * fruits.length);
  return items[choose];
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
