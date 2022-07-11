export class Item {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.createdAt = Date.now();
  }

  displayCreatedAt() {
    return new Date(this.createdAt).toLocaleString();
  }
}
