const fs = require('fs');

const output = fs.createWriteStream('data.txt');

for (let index = 0; index < 1000000; index++) {
    output.write(`Line number ${index}\n`);
}

output.end();

output.on('finish', function () {
    console.log('File generated');
});