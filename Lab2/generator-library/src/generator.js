export function* counterGenerator(start = 0) {
    let current = start;
    while (true) {
        yield current;
        current++
    }
}