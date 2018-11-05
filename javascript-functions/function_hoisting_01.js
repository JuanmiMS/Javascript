
/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 *
 * La variable sale como undefined ya que está dentro de una función y no podrá leer X a menos que se le pase
 * como parámetro
 */

var x = 1;
function f() {
    console.log(x);
    var x = 2;
};

f();