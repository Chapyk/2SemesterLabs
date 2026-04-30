const fs = require('fs');
const readline = require('readline');

async function processFile() {
    const fileStream = fs.createReadStream('data.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let count = 0;

    for await (const line of rl) {
        if (line.includes('999')) {
            count++;
        }
    }

    console.log('Lines containing 999:', count);
}

processFile();