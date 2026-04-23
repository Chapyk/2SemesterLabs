const fs = require('fs');

async function* readLines(filePath) {
    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    let buffer = '';

    for await (const chunk of stream) {
        buffer += chunk;
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
            yield line;
        }
    }

    if (buffer) {
        yield buffer;
    }
}

async function processFile() {
    let count = 0;

    for await (const line of readLines('data.txt')) {
        if (line.includes('999')) {
            count++;
        }
    }

    console.log('Lines containing 999:', count);
}

processFile();