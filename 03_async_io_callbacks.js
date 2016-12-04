/**
 * Read file async
 * 
 * Async IO - Don't block the current Thread
 * 
 */
const fs = require('fs');


fs.readFile('./package.json', function(error, result) {
  
   if (error) {
      console.log('error');
      return;
   }

   console.log('inside fs.readFile function call ', result);
})

console.log('after fs.readFile function call');