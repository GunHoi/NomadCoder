const time = document.querySelector("#time");

function remainTime() {
  const dateChristmas = new Date("2022-12-25T00:00:00");
  const date = new Date();
  let timeDiff = dateChristmas.getTime() - date.getTime();

  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

  const seconds = Math.floor((timeDiff / 1000) % 60);

  time.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
remainTime();
setInterval(remainTime, 1000);
