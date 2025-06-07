function changeElements() {
  const input = document.getElementById('myInput');
  console.log(input.value);

  const button = document.getElementById('myButton');
  button.style.backgroundColor = 'black';
  button.style.color = 'white';

  const title = document.getElementById('title');
  title.style.textAlign = 'center';

  document.body.style.backgroundColor = 'green';
}