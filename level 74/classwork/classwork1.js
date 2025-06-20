// 1. წამოიღეთ ღილაკის ელემენტი ID-ით
const button = document.getElementById('darkModeBtn');

// 2. გააკეთეთ მოვლენის მსმენელი
button.addEventListener('click', function(event) {
  // 3. დაბეჭდეთ event ობიექტი
  console.log(event);

  // 4. ვებსაიტის ფონის ფერის შეცვლა შავზე
  document.body.style.backgroundColor = 'black';

  // 5. ტექსტის ფერის შეცვლა თეთრზე
  document.body.style.color = 'white';
});