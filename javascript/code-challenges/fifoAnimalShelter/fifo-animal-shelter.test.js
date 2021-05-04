"use strict";

// Require our linked list implementation

const AnimalShelter = require("./fifo-animal-shelter");
describe("Shelter", () => {
  it("can enqueue animal to the correct queue", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ name: "Spot", type: "dog" });
    shelter.enqueue({ name: "Rover", type: "dog" });
    shelter.enqueue({ name: "Cujo", type: "dog" });
    shelter.enqueue({ name: "Pepper", type: "cat" });
    shelter.enqueue({ name: "Garfield", type: "cat" });
    // console.log(shelter.dogs);
    expect(shelter.dogs.length).toEqual(3);
    expect(shelter.cats.length).toEqual(2);
  });
  it("can dequeue animals", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ name: "Spot", type: "dog" });
    shelter.enqueue({ name: "Rover", type: "dog" });
    shelter.enqueue({ name: "Cujo", type: "dog" });
    shelter.enqueue({ name: "Pepper", type: "cat" });
    shelter.enqueue({ name: "Garfield", type: "cat" });
    console.log("Before", shelter.cats);
    expect(shelter.dequeue("dog").name).toEqual("Spot");
    console.log("After", shelter.cats);
    expect(shelter.dequeue("cat").name).toEqual("Pepper");

    expect(shelter.dogs.length).toEqual(2);
    expect(shelter.cats.length).toEqual(1);
  });
});
