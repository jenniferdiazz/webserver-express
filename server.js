const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
//se realiza una solicitud get cuando el path sea un /---..hacer una funcion callback
//el middleware filtrara el tipo de peticion
//el middleware es un callback o instruccion que se va a ejecutar siempre sin importar que URL  esta pidiendo el usuario
//para usarlo ponemoos app.use y le damos una funcion o callback el static mostrare un folder que queremos hacer publico
//todo lo que este en esta carpeta sera publico
app.use(express.static(__dirname + '/public'));


//EXPRESS HBS engine
//el dirname hace referencia a tomar todo el path
//le decimos a hbs que va a tener un directorio donde estaran los parciales
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res) => {
    //res.send('hola data!')
    //ahora diremos: "renderiza el archivo"
    res.render('home', {
        nombre: 'jenNifer JAZMIN diaz zavaLa',
        //anio: new Date().getFullYear()
    })

})


app.get('/about', (req, res) => {
    //res.send('hola data!')
    //ahora diremos: "renderiza el archivo"
    /*res.render('about', {
        nombre: 'jennifer diaz zavaLa',
        //anio: new Date().getFullYear()
    })*/
    res.render('about');

})

/*app.get('/', (req, res) => {
    //res.send('Hello World!')
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    };
    res.send(salida);
})*/

/*app.get('/data', (req, res) => {
    res.send('hola data!')

})*/

//el app.listen tambien recibe un callback

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})