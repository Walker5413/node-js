const fs = require('fs');

// ***to remove files

// fs.unlink('write.txt', (error) => {
//     console.log(error);
// })

// ***creating dir Synchronously this method blocks the flow of code

//fs.mkdirSync('my-folder');

// ***removing dir 

//fs.rmdirSync('my-folder');

// ***async method to create dir

// fs.mkdir('my-folder', () => {
//     fs.readFile('read-me.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./my-folder/write-me.txt', data, () => {

//         })
//     })
// })

// ***async method to remove dir
// ***we need to remove files from dir to delete a dir

 
