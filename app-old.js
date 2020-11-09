const http = require('http')
    //se crea el servidor  para usar http
http.createServer((req, res) => {
        //enviemos u¿n json
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }
        res.write('Hola mundo');
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080')