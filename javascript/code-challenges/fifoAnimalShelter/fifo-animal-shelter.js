class Animal {
  constructor() {
    this.name = "";
    this.type = "";
  }
}

class Queue {
  constructor() {
    this.front = 0;
    this.length = 0;
  }
  enqueueItem(value) {
    this[this.length] = value;
    this.length++;
  }
  dequeueItem() {
    console.log("reached dequeueItem", this[this.front]);
    let current_length = this.length - this.front;
    if (current_length <= 0) {
      return null;
    }
    let node = this[this.front];
    delete this[this.front];
    this.front++;
    this.length--;
    if (this.front === this.length) {
      this.front = 0;
      //this.length = 0;
    }
    return node;
  }

  peek() {
    return this[this.length - 1];
  }
}
class AnimalShelter {
  constructor() {
    this.cats = new Queue(Animal);
    this.dogs = new Queue(Animal);
  }

  enqueue(pet) {
    if (pet.type === "cat") {
      this.cats.enqueueItem(pet);
    } else if (pet.type === "dog") {
      this.dogs.enqueueItem(pet);
    } else {
      return "ERROR: Cannot Provide Shelter to this type of animal";
    }

    /*  this[this.length] = value;
        this.length++;*/
  }
  dequeue(pref) {
    let adopted = "null";
    if (pref === "dog") {
      console.log("reached dog");
      adopted = this.dogs.dequeueItem();
    } else if (pref === "cat") {
      console.log("reached cat");
      adopted = this.cats.dequeueItem();
    } else {
      return "ERROR: No animals of this type are available";
    }
    return adopted;
  }
}

module.exports = AnimalShelter;
