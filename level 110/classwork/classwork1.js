function getRandomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("success");
      } else {
        reject("fail");
      }
    }, 2000);
  });
}

async function handlePromise() {
  try {
    const result = await getRandomPromise();
    console.log("Resolved value:", result);
  } catch (error) {
    console.log("Rejected value:", error);
  }
}

handlePromise();