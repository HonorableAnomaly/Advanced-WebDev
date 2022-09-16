module.exports = {
  forEach(arr, func) {
    // Loop 1
    // for (let i = 0; i < arr.length; i++) {
    //   const value = arr[i];
    //   func(value, i);
    // }

    // Loop 2
    for (let index in arr) {
      func(arr[index], index);
    }
  },
  map(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i], i));
    }
    return result;
  }
};
