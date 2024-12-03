import img from "../img/goblin.png";

const lengthList = 16;
const goblinBurrow = document.createElement("ul");
goblinBurrow.classList = "game-field";
let i = 0;

while (i < lengthList) {
  i++;
  goblinBurrow.insertAdjacentHTML(
    "beforeend",
    `<li class="goblin-burrow" data-id="${i}"></li>`,
  );
}
document.body.appendChild(goblinBurrow);

export default function game() {
  const icon = `<img src="${img}" class="img-goblin" alt="Catch!!!" id="img">`;

  const fields = document.querySelectorAll(".goblin-burrow");
  const arr = [];

  function getRandom(max) {
    let randomA = Math.floor(Math.random() * max);
    while (randomA === arr[0]) {
      randomA = Math.floor(Math.random() * max);
    }
    arr[0] = randomA;
    return randomA;
  }

  const random = getRandom(fields.length);
  fields.forEach((item) => {
    const goblinsFace = item.querySelector("#img");

    if (goblinsFace) {
      goblinsFace.remove();
    }
  });
  fields[random].insertAdjacentHTML("beforeend", icon);
}
export const interval = setInterval(() => game(), 1000);
