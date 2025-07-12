function sumNumbers() {
  let sum = 0;
  let i = 0;

  while (i <= 10) {
    if (i % 2 !== 0) {
      i++;
      continue;
    }
    sum += i;
    i++;
  }

  console.log("ლუწი რიცხვების ჯამი 0-დან 10-მდეა:", sum);
}