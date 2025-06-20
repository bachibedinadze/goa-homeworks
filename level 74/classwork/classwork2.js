// ვიღებთ ლინკს ID-ით
const link = document.getElementById('myLink');

// ვამატებთ pointerover მოვლენის მსმენელს
link.addEventListener('pointerover', function(e) {
  const target = e.target;

  // დაბეჭდოს ყველა ატრიბუტის მნიშვნელობა
  for (let attr of target.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
  }

  // დაბეჭდოს თავად target ელემენტი
  console.log(target);
});