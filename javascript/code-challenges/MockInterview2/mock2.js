const Stack = require("../stacksAndQueues/stacks-and-queues");

console.log(duckduckgoose(["A", "B", "C", "D", "E"], 3));

function duckduckgoose(stringArr, k) {
  let Dq = new Queue();
  let peopleLeft = stringArr[x].length;
  let count = 0;
  for (let x = 0; x < stringArr.length; x++) {
    Dq.enqueue(stringArr[x]);
  }
  if (peopleLeft != 1) {
    while (count < k) {
      if ((count = 3)) {
        Dq.dequeue();
        count = 0;
        peopleLeft -= 1;
      } else {
        let popped = Dq.dequeue();
        Dq.enqueue(popped);
        k += 1;
      }
    }
  }
}
