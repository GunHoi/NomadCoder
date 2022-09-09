const btn = document.querySelector("#btn");
const bd = document.querySelector("#bd");
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "darkblue",
  "purple"
];

function onClick(event) {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  if (color1 === color2) {
    return onClick();
  }
  console.log(color1 + "&" + color2);
  bd.style.backgroundImage = `linear-gradient(45deg, ${color1}, ${color2})`;
}
onClick();
btn.addEventListener("click", onClick);
