const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const hexColor = "#" + [...Array(6)].map((_) => hex[Math.floor(Math.random() * 16)]).join('');
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})
