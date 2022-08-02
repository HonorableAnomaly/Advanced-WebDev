// **THIS PAGE WILL NOT RUN!!! Example code only**
//
const arr = [1, 2, 3, 4, 5, 6];

// Looping with a function callback

function double(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}

// Refactored using forEach

forEach(arr, function (number) {
  console.log(number * 2);
});

double(arr);

// 3 iterations to concatinate a string

let strings = ["My", "forEach", "example"];

let result = "";
forEach(strings, function (str, index, array) {
  if (array.length - 1 !== index) {
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

// Final result: "My forEach example!!!"

// Implementation of forEach

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
