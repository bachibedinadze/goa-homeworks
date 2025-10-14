function workingOnPromise(str) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str.length > 5) {
        resolve(`'${str}' – სიგრძე მეტია 5-ზე`);
      } else {
        reject(`'${str}' – სიგრძე არ არის 5-ზე მეტი`);
      }
    }, 1000);
  });

  promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
}

workingOnPromise("Hello");
workingOnPromise("Programming");
workingOnPromise("Cat");