﻿/**
 * Demonstra apenas a funcionalidade de passagem de uma função como parâmetro
 */
const myFunction = function(param) {
    console.log('param ' + param);
}

function callPrinter(printerFunction) {
  printerFunction('123');
}

callPrinter(function (param) {
    console.log('this is another function ' , param);
});

