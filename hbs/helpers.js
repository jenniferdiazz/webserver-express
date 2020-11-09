const hbs = require('hbs');
//helpers -> es una funcion que se dispara cuando el template lo requiera
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (texto) => {
    //split El split convierte un sring en un array partiendo el string desde la clave que le demos.
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    return palabras.join(' ');
});