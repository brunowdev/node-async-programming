/**
 * Read file sync
 * 
 * Async IO - Don't block the current Thread
 * 
 */
const fs = require('fs');

const content = fs.readFileSync('./package.json');
console.log('contents ', content.toString());