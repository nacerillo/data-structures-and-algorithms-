"use strict";
const Node = require("./node.js");
// Linked list is defined by it's head.
class LinkedList {
  constructor() {
    this.head = null;
    // this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        // this.length += 1;
        current = current.next;
      }
      current.next = node;
    }
  }

  includes(val) {
    let current_node;

    //check if list is already empty or not
    if (!this.head) {
      return false;
    } else {
      current_node = this.head;
      //iterate through list, if value matches that of the current node
      //then return true, otherwise, iterate to next.
      while (current_node.next) {
        if (current_node.value == val) {
          return true;
        } else {
          current_node = current_node.next;
        }
      }
    }
    return false;
  }
  kthFromEnd(k) {
    //console.log("LENGTH/K:", this.length, k);
    let current_node;
    let length = 0;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
      length++;
    }
    if (k < 0 || k > length) {
      return "Invalid K";
    }
    if (!this.head) {
      return "list does not exist";
    }

    current_node = this.head;
    let difference = length - k + 1;
    for (let x = 1; x < difference; x++) {
      // console.log(current_node.next);
      current_node = current_node.next;
      console.log(current_node.value);
    }

    return current_node.value;
  }
  toString() {
    let current_node;
    let listString = "";
    if (!this.head) {
      return "list does not exist";
    } else {
      current_node = this.head;
      while (current_node.next) {
        listString += `{${current_node.value}}->`;
        current_node = current_node.next;
      }
      listString += `{${current_node.value}}->NULL`;
    }
    console.log(listString);
    return listString;
  }
}

function minSteps(arr){
let collector = 0;
let multiplier = 1;

for(let i = 1; i < arr.length; i++){
  if(arr[i] != arr[i-1]){
    if(arr[i] < arr[i-1]){
      collector += (arr[i-1] - arr[i]) * multiplier;
      multiplier = 1; 
    }
  }
  else multiplier ++;
}
console.log("Total Steps: ", collector);

}

minSteps([5,5,5,2,2,2,1]);


module.exports = LinkedList;
