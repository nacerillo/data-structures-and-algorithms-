const HashMap = require("./hashmap.js");

function leftJoin(hashmap1, hashmap2) {
  let list = [];

  for (let i in hashmap1.storage) {
    let current1 = hashmap1.storage[i].head;
    //let current2 = hashmap2.storage[i].head;
    while (current1) {
      let keyleft = current1.data[0];
      let valleft = current1.data[1];
      let innerlist = [];
      innerlist.push(keyleft);
      innerlist.push(valleft);
      if (hashmap2.mapContains(keyleft)) {
        innerlist.push(hashmap2.getValueofKey(keyleft));
      } else {
        innerlist.push(null);
      }
      //console.log("KEY ", current1.data[0]);
      list.push(innerlist);
      //console.log(current1.data);
      //console.log(current1.data);
      current1 = current1.next;
    }
  }
  return list;
}

let hashmap1 = new HashMap(4);
let hashmap2 = new HashMap(7);
hashmap1.addPair("fond", "enamored");
hashmap1.addPair("wrath", "anger");
hashmap1.addPair("diligent", "employed");
hashmap1.addPair("outift", "garb");
hashmap1.addPair("guide", "usher");
hashmap2.addPair("fond", "averse");
hashmap2.addPair("wrath", "delight");
hashmap2.addPair("diligent", "idle");
hashmap2.addPair("guide", "follow");
hashmap2.addPair("flow", "jam");

console.log(leftJoin(hashmap1, hashmap2));
