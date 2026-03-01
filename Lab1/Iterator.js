function* countergen(start = 0) {
    let current = start;
    while (true) {
        yield current;
        current++;
    }
}

const gen = countergen(1);

function runWithTimeout(iterator, seconds) {
    const intervalId = setInterval(function () {
        const value = iterator.next().value;
        console.log(value);
    }, 1000);
    setTimeout(function () {
        clearInterval(intervalId);
        console.log("Finished");
    }, seconds * 1000);
}

runWithTimeout(gen, 7)
