function* countergen(start = 0) {
    let current = start;
    while (true) {
        yield current;
        current++
    }
}

const gen = countergen(1)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function* fibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        let next = a + b;
        a = b;
        b = next
    }
}

const fibgen = fibonacciGenerator()

console.log(fibgen.next().value)
console.log(fibgen.next().value)
console.log(fibgen.next().value)
console.log(fibgen.next().value)
console.log(fibgen.next().value)

