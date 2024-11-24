/* eslint-disable no-unused-vars */
class GoblinBurrow {
  constructor(element) {
    this._element = element;
  }
  deleteGoblin() {
    const goblin = this._element.querySelector("img");
    if (goblin) {
      goblin.remove();
    }
  }
  addGoblin(id, item) {
    this.deleteGoblin();
    const liElement = this._element.querySelector(`li[data-id="${id}"]`);
    liElement.appendChild(item);
  }
}
