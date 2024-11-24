document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".game-field");
  // eslint-disable-next-line no-undef
  const goblin = new GoblinBurrow(element);
  const item = document.createElement("img");
  item.src = "./img/goblin.png";
  item.classList = "img-goblin";
  window.goblin = goblin;
  setInterval(() => {
    let newBurrow = Math.floor(Math.random() * (16 - 1)) + 1;
    if (element.querySelector("img") !== null) {
      const lastBurrow = element.querySelector("img").parentElement.dataset.id;
      let flag = 0;
      while (flag === 0) {
        newBurrow = Math.floor(Math.random() * (16 - 1)) + 1;
        if (newBurrow !== lastBurrow) {
          flag = 1;
        }
      }
      goblin.addGoblin(newBurrow, item);
    } else {
      goblin.addGoblin(newBurrow, item);
    }
  }, 1000);
});
