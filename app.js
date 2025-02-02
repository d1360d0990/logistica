console.log("Aplicacion iniciando...");
const express = require('express');
const app = express();
const dbconnect = require('./config/db');
const logisticRoutes = require('./Routes/logisticRoute');


//cors
const cors = require ('cors')
const corsOptions = require('./config/corsOptions');

const dotenv = require('dotenv');

dotenv.config();

// Configurar CORS
app.use(cors(corsOptions)); 
app.use(express.json()); //Middlewar para parsear JSON
app.use("/api",logisticRoutes); 


dbconnect().then(() => {
   
        console.log('El servidor está corriendo' );
        
  

}).catch(err => {
    console.log('No se pudo iniciar el servidor debido a un error en la base de datos');
});

module.exports = app;