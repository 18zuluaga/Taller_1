// comentario de una sola linea
/*
    comentario en bloque
*/

let miNumero = 10;
console.log(miNumero);
let miBooleano = true;
console.log(typeof miBooleano);

let miCadena = "hoal mundo";
console.log(length(miCadena));

let miArray = ["hola", 5, [5, 5]];

console.log(miArray);

let miObjeto = {
    hola: "hola",
    hola: "hola",
    hola: "hola",
};

console.log(miObjeto);

let nombreUsuario = prompt("cual e stu nombre?");

alert(`hola ${nombreUsuario}`);

let js = confirm("te gsuta javaSrcip");

if (js === true) {
    alert("te gusta js");
} else {
    alert("no te gusta js");
}
