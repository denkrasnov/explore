const graph = [
  {
    name: "you",
    friends: [
      { name: "alice", isSeller: false, friends: [] },
      { name: "bob", isSeller: false, friends: [] },
      { name: "claire", isSeller: false, friends: [] }
    ],
    isSeller: false
  },
  {
    name: "bob",
    friends: [
      { name: "anuj", friends: [], isSeller: false },
      { name: "peggy", friends: [], isSeller: false }
    ],
    isSeller: false
  },
  { name: "alice", friends: [{ name: "peggy", friends: [], isSeller: false }], isSeller: false },
  {
    name: "claire",
    friends: [
      { name: "thom", friends: [], isSeller: true },
      { name: "jonny", friends: [], isSeller: false }
    ],
    isSeller: false
  },
  { name: "peggy", friends: [], isSeller: false }
];

const breadthFirstSearch = (graph) => {
  let searchQueue = [...graph];
  const searched = [];
  while (searchQueue) {
    const person = searchQueue.shift();
    if (!searched.includes(person.name)) {
      if (person.isSeller) {
        console.log(`Person '${person.name}' is sellere`);
        return true;
      } else {
        searchQueue = [...searchQueue, ...person.friends];
        searched.push(person.name);
      }
    }
  }
};

const result = breadthFirstSearch(graph);
console.log("result:", result);
