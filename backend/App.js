const express = require('express');
require('dotenv').config();

//Creamos el servidor
const app = express();

//Expongamos el backend
const cors = require('cors');
app.use(cors());

//Capturar el cuerpo de las peticiones
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configurar la conexión con el mongo atlas
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.wea1v.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log("Error en la conexión: " + e));

//Importemos las rutas
const {product_routes,registro_routes,venta_routes} = require('./routes');
app.use('/api/v1/product', product_routes);
app.use('/api/v1/registros', registro_routes);
app.use('/api/v1/venta', venta_routes);



//Pongamos al servidor a escuchar
app.listen(process.env.PORT, () =>{console.log("Estoy a tu servicio en el puerto "+process.env.PORT)});
