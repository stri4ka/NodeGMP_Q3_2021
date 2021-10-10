const fs = require('fs');
const csv = require('csvtojson');
const csvFilePath = '/index.csv';
const csvToJsonFilePath = '/result.txt';

const readStream = fs.createReadStream(__dirname + csvFilePath);
const writeStream = fs.createWriteStream(__dirname + csvToJsonFilePath);

const csvOptions = { delimiter: ';' };

csv(csvOptions)
    .fromStream(readStream).subscribe(
    (line) => {
        console.log('-->', line);
        writeStream.write(`${JSON.stringify(line)} \n`);
    },
    (err ) => {
        console.log(`Write error: ${err}`)
    },
    ()=>{
        writeStream.end();
        console.log('Writing to the json file is completed')
    },
)

writeStream.on('close', () => { console.log('writeStream is closed')})


