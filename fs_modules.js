// ***read and write modules
const fs = require('fs');

// ***Synchronously read file it blocks the flow of code until it finish
// const text = fs.readFileSync('read-me.txt', 'utf-8');

// console.log(text);

//

// ***write file

// fs.writeFileSync('write.txt', text);

//


// ***async is much faster if u have more request at a tim

fs.readFile('read-me.txt', 'utf-8', function(error, data){
    console.log(data);
});

// this code will fire it is not blocked as Synchronously
console.log('hi there');

fs.readFile('read-me.txt', 'utf-8', function(error, data){
    fs.writeFile('write.txt', data, function(error){
        if(error){
            console.log(error)
        }
    })
});

//