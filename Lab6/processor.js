const fs = require('fs');
const readline = require('readline');

async function analyzeFile() {
    const stream = fs.createReadStream('data.txt');

    const lineReader = readline.createInterface({
        input: stream,
        crlfDelay: Infinity,
    });

    let total = 0;

    for await (const row of lineReader) {
        if (row.indexOf('999') !== -1) {
            total++;
        }
    }

    console.log(`Lines containing 999: ${total}`);
}

analyzeFile();