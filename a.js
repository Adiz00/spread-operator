var a = [
  [
    [5, [11, 12]],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
  [
    [9, 10],
    [11, 12],
  ],
];
var b = [...a[0][0][1]];
console.log(b[1]);
// console.log(b[1]);

var obj = {
  name: "name",
  age: "age",
  child: {
    child1: {
      grandChild1a: "grandChild1a",
      grandChild1b: "grandChild1b",
      grandChild1c: "grandChild1c",
    },

    child2: {
      grandChild1a: "grandChild2a",
      grandChild1b: "grandChild2b",
      grandChild1c: "grandChild2c",
    },
    child3: {
      grandChild1a: "grandChild3a",
      grandChild1b: "grandChild3b",
      grandChild1c: "grandChild3c",
    },
  },
  DNA: "",
};
var child2={...obj.child.child2}
console.log(child2);