const BDPQ = require('./bdpq');

const pq = new BDPQ();

pq.enqueue("A", 5);
pq.enqueue("B", 1);
pq.enqueue("C", 10);

console.log("Highest:", pq.peek("highest"));
console.log("Lowest:", pq.peek("lowest"));
console.log("Oldest:", pq.peek("oldest"));
console.log("Newest:", pq.peek("newest"));

console.log("Dequeue highest:", pq.dequeue("highest"));
console.log("Dequeue oldest:", pq.dequeue("oldest"));