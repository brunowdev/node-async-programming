/**
 * Read file async
 * 
 * Async IO - Don't block the current Thread
 * 
 */
const fs = require('fs');

fs.readFile('./package.json', function(error, result) {
   console.log('inside fs.readFile function call');
})

console.log('after fs.readFile function call');