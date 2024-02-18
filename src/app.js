const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

// Cargamos las variables de entorno
require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});

// Configuramos el servidor
const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

// Importamos el router de usuarios
const usuariosRouter = require("./routes/usuarios.js");

// Rutas 
app.use("/api/libros", autenticacion, librosRouter);
app.use("/usuarios", autenticacion, usuariosRouter);

// Middleware de errorHandler
app.use(errorHandler);

// Iniciamos el servidor 
app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`);
});

// Exportamos el servidor
module.exports = app;
