"use strict";

const LinkedList = require("./ll-insertion.js");

let ll = new LinkedList();

console.log("empty list", ll);

ll.append(10);

console.log("single item", ll);

ll.append(20);

console.log("2 items", ll);
