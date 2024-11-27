export default class GoblinBurrow {
  constructor(elem) {
    this.burrow = elem.querySelectorAll(".goblin-burrow");
    this.photoGoblin = elem.querySelector(".img-goblin");
  }

  getRandomPosition() {
    let previous = 0;
    let i = 0;

    setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.burrow.length - 1));
      }

      previous = i;
      this.burrow[i].appendChild(this.photoGoblin);
    }, 1000);
  }
}
