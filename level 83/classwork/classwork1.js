const printLongStrings = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 5) continue;
    console.log(arr[i]);
  }
};

// მაგალითი:
const myWords = ["apple", "banana", "car", "computer", "sun", "mountain", "hi", "friend", "book", "telephone"];

printLongStrings(myWords);