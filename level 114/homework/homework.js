const themeSwitch = document.getElementById('themeSwitch');
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);
themeSwitch.checked = savedTheme === 'dark';

themeSwitch.addEventListener('change', () => {
  const theme = themeSwitch.checked ? 'dark' : 'light';
  document.body.className = theme;
  localStorage.setItem('theme', theme);
});

let visits = localStorage.getItem('visits');
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem('visits', visits);
document.getElementById('visitCounter').textContent =
  `You have visited this page ${visits} time${visits > 1 ? 's' : ''}.`;

const form = document.getElementById('userForm');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
  const savedValue = localStorage.getItem(input.id);
  if (savedValue) input.value = savedValue;
});

inputs.forEach(input => {
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value);
  });
});