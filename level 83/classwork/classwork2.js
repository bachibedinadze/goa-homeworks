const printFirst5Evens = () => {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) continue; // გამოტოვე კენტი
    console.log(i);
    count++;
    if (count === 5) break; // თუ უკვე 5 ცალიც დაიბეჭდა, გაჩერდი
  }
};

printFirst5Evens();