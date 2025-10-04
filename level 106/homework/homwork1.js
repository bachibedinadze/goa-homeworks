const strings = ["apple", "banana", "kiwi", "mango", "pear"];

const randomStringPromise = new Promise((resolve, reject) => {
  const randomIndex = Math.floor(Math.random() * strings.length);
  const chosen = strings[randomIndex];

  console.log("Chosen string:", chosen);

  if (chosen.length % 2 === 0) {
    resolve("success");
  } else {
    reject("failure");
  }
});

function successHandler(message) {
  console.log("Resolved with:", message);
}

function failureHandler(message) {
  console.log("Rejected with:", message);
}

randomStringPromise.then(successHandler).catch(failureHandler);