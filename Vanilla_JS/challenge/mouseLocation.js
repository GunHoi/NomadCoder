const title = document.getElementById("app");
const colors = ["red", "green", "blue", "purple"];

title.innerText = "Hello!";

function superEventHandler() {
  function handleMouseEnter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[1];
  }
  function handleMouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[2];
  }
  function handleWindowResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  }
  function handleRightClick() {
    title.innerText = "That was a right click!";
    title.style.color = colors[0];
  }
  title.addEventListener("mouseenter", handleMouseEnter);
  title.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("contextmenu", handleRightClick);
}

superEventHandler();
