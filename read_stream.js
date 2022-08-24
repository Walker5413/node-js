const http = require('http');
const fs = require('fs');

// *** the best way to load file with out waiting to load all the file 

// ***readable stream
const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf-8');

// ***writeable stream 
const writeStream = fs.createWriteStream(__dirname + '/write_lorem.txt');

// readStream.on('data', (chunk) => {
//     console.log('new data received');
//     console.log(chunk);
//     // ***write chunk to the write_lorem file
//     writeStream.write(chunk);
// }); 

// ***pipe is used to pipe files from read to write with out waiting buffering
// ***we don't have to manually write the code it will do it automatically 
readStream.pipe(writeStream);

