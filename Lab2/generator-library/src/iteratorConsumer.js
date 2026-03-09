export function consumeIterator(iterator, seconds) {
    const intervalId = setInterval(() => {
        console.log(iterator.next().value);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Finished");
    }, seconds * 1000);
}