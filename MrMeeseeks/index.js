/*Archivo principal. Son practicamente casos test*/
var importaBox = require('./box');
require('./mrmeeseeks');

//Crea la caja
var caja = importaBox.Box();
caja.getInstance();

let mr = new MrMeeseeks('hola');


console.log("[Jerry] Press the button");

// let ms1 = caja.createMrMeeseek();
// let ms2 = caja.createMrMeeseek();
//
// ms1.getName();
// ms2.getName();
