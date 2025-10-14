function checkStringLength(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str.length % 2 === 0) {
        resolve(str);
      } else {
        reject(str);
      }
    }, 2000);
  });
}

const promise1 = checkStringLength("hello");
const promise2 = checkStringLength("worlds");
const promise3 = checkStringLength("chatGPT");


Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("ყველა Promise წარმატებით შესრულდა:");
    console.log(results);
  })
  .catch((error) => {
    console.log("ერთ-ერთმა Promise-მა შეცდომა დააბრუნა:");
    console.log(error);
  });