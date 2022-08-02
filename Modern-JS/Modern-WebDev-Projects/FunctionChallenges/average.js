// My example
function average(avg) {
  for (let i = 0; i <= avg.length; i++) {
    avg[i] / avg.length;
  }
  return avg;
}

// Test example #1
function avg(arr) {
  let total = 0;
  for (let val of arr) {
    total += val;
  }
  let res = total / arr.length;
  return res;
}

// Test example #2
function avg2(arr) {
  let total = 0;
  for (let val of arr) {
    total += val;
  }
  return total / arr.length;
}
