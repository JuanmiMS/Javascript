/**
 * To obtain the value of a property, use the dot (.)
 * or square bracket ([]) operators.
 * The left-hand side should be an expression whose value is an object.
 * If using the dot operator, the right-hand must be a simple identifier
 * that names the property.
 * If using square brackets, the value within the brackets must be
 * an expression that evaluates to a string that contains the desired property name
 *
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var empty = {};     // An object with no properties

var point = {x: 0, y: 0};       // Two properties

var point2 = {x: point.x, y: point.y + 1};        // More complex values

var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};

// Excribe aquí el código para consultar los valores de las propiedades
// de los objetos empty, point y point2
// Utiliza la notacion dot y square brakets []

console.log("Empty: ", empty);
console.log("Points -> X: ", point.x, ", Y: ", point.y);
console.log("Points[] -> X: ", point["x"], ", Y: ", point["y"]);
console.log("Points 2 -> X: ", point2.x, ", Y: ", point2.y);

// Cambia el valor de las propiedades x e y del objeto point

point.x = 3;
point.y = 3;
console.log("Points 3 -> X: ", point.x, ", Y: ", point.y);

// Cambia el valor de las propiedades "main title", "sub.title" y "for"
// del objeto book

console.log("Book -> Title:", book["main title"], ", Subtitle: ", book["sub-title"], ", For: ", book["for"]);

// Cambia el valor de las propiedades del objeto author
console.log("Original author: ", book.author.firstname, book.author.surname);
book.author.firstname = "Juanmi";
console.log("Modified author: ", book.author.firstname, book.author.surname);

/**
 * Escribe aqui el código para mostrar en consola
 * los valores de las propiedades del objeto book
 * utilizando un foe
 *
 * Que notacion has utilizado? dot o []
 * Por que?
 */
console.log("-------------------Bucle for------------------------");


for (let key in book) {
    if (book.hasOwnProperty(key)) {
        if (typeof book[key] === "object") {
            for (let prop in book[key]){
                console.log(`${prop} -> ${book[key][prop]}`)
            }
        }
    }
    else{
        console.log(`${key} -> ${book[key]}`);
    }
}


