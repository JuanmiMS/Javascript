/*Archivo principal. Son practicamente casos test*/
var importaBox = require('./box');

//Crea la caja
var caja = importaBox.Box();
caja.getInstance();


console.log("[Jerry] Press the button");
let mrMsJerry = caja.createMrMeeseek();
mrMsJerry.makeRequest("abre un tarro", "la cocina");
