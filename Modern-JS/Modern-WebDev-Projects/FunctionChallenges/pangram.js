// My example
function isPangram(str) {
  for (let s of str) {
    if ((s = "a" || "b" || "c")) {
      str.toLowerCase;
      return true;
    }
    return false;
  }
}

// Example case #1
function isPangram1(str) {
  let lowerCased = str.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

// Example case #2
function isPangram2(str) {
  let upperCased = str.toUpperCase();
  for (let char of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    if (upperCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

// Example case #3
function isPangram3(str) {
  let lowerCased = str.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}
