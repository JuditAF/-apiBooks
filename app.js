
// IMPORTACIÓN DE MÓDULOS
const express = require('express');
const cors = require('cors');
const userRouters = require("./src/routers/user.routers");  
const bookRouters = require("./src/routers/book.routers");   
const errorHandling = require ('./src/error/errorHandling');


// GENERAMOS EL OBJETO APP
const app = express();                                  


// DEFINICIÓN DEL PUERTO
app.set('port', process.env.PORT || 3000);  
// app.set('port', process.env.PORT || 4200);  
    

// MIDDLEWARES
app.use(cors());                                        // CAPA DE SEGURIDAD

app.use(express.urlencoded({ extended : false }));      // ORIGEN EN FORMATO .JSON
app.use(express.json());                                // DESTINO EN FORMATO .JSON


app.use(userRouters);                           // LLAMAMOS A NUESTRA API QUE SE ENCUENTRA EN LAS RUTAS DE LOS ENDPOINTS   
app.use(bookRouters);                              


//  RECOGEMOS ERRORES
app.use(function(req, res, next) {                      // RECOGER EL ERROR DEL CLIENTE: "NO ENCONTRADO"

    res.status(404).json({ error: true,
                           codigo: 404,
                           message: "Endpoint doesn't found"}
                        )
});

app.use(errorHandling);                                 // ERROR DEL SERVIDOR


// EXPORTAMOS NUESTRA APP
module.exports = app;