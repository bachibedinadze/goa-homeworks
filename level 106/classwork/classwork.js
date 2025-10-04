const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task complete");
  }, 3000);
});

myPromise.then(message => {
  console.log(message);
});