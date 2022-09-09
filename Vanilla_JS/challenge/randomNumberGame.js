const numRange = document.querySelector("#generate input");
const guess = document.querySelector("#guess");
const guessInput = document.querySelector("#guess input");
const result = document.querySelector("#result");
const winOrLose = document.querySelector("#wol");

function onSubmit(event) {
  event.preventDefault();
  const generateNum = Math.floor(Math.random() * numRange.value);
  const guessNum = Number(guessInput.value);

  if (generateNum === guessNum) {
    result.innerText = `You chose: ${guessNum}, the machine chose: ${generateNum}.`;
    winOrLose.innerText = "You Won !";
  } else {
    result.innerText = `You chose: ${guessNum}, the machine chose: ${generateNum}.`;
    winOrLose.innerText = "You Lost !";
  }
}

guess.addEventListener("submit", onSubmit);
