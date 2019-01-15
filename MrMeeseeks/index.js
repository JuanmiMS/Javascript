/*Archivo principal. Son practicamente casos test*/
var importaBox = require('./box');
require('./mrmeeseeks');

//Crea la caja
var caja = importaBox.Box();
caja.getInstance();

let mr = new MrMeeseeks('hola');


console.log("[Jerry] Press the button");
let mrMsJerry = caja.createMrMeeseek();
mrMsJerry.makeRequest("abre un tarro", "la cocina");
