const numbers = [5, 8, 12, 4, 10, 6, 9, 7]; // შეგიძლია ცვალო რიცხვები

const sumUntil50 = () => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
    if (sum > 50) break;
  }
  console.log("შეკრება დასრულდა, ჯამია:", sum);
};

sumUntil50();