//console.log('hello world');

// let count = 0;
// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed`);
//     if (count > 6){
//         clearInterval(timer);
//     }
// }, 2000);

// ***show the file directory
// console.log(__dirname);

// show file name
// console.log(__filename);

// ***functions in node 
// function orange (){
//     console.log('hello world!');
// }
// orange ();

// ***function expressions
// function here is an anonymos function
// let red = function(){
//     console.log('hi there');
// }

// red();

// ***Passing function as an argument to another function

function callbackfunc(func){
    func();
}

let red = function(){
    console.log('hi there');
}

callbackfunc(red);
























