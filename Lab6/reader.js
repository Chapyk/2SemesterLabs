const fs = require('fs');

async function* getFileLines(pathToFile) {
    const file = fs.createReadStream(pathToFile, {
        encoding: 'utf8'
    });

    let leftover = '';

    for await (const part of file) {
        leftover += part;

        const currentLines = leftover.split('\n');
        leftover = currentLines.pop();

        for (let textLine of currentLines) {
            yield textLine;
        }
    }

    if (leftover.length > 0) {
        yield leftover;
    }
}

async function startProcessing() {
    let matchedLines = 0;

    for await (const currentLine of getFileLines('data.txt')) {
        if (currentLine.indexOf('999') !== -1) {
            matchedLines += 1;
        }
    }

    console.log(`Lines containing 999: ${matchedLines}`);
}

startProcessing();