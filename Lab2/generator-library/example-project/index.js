import { counterGenerator, consumeIterator } from "../index.js"; 

const gen = counterGenerator(1);

consumeIterator(gen, 5);