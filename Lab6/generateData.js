const fs = require('fs');

const stream = fs.createWriteStream('data.txt');

for (let i = 0; i < 1_000_000; i++) {
    stream.write(`Line number ${i}\n`);
}

stream.end();

stream.on('finish', () => {
    console.log('File generated');
});