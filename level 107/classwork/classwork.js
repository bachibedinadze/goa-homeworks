function getRandomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(`Resolve: ${randomNumber}`);
      } else {
        reject(`Reject: ${randomNumber}`);
      }
    }, 1000);
  });
}

getRandomPromise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });