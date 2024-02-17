const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB)
.then(() => console.log('Conectado a la base de datos MongoDB'))
.catch((err) => console.error("Error al conectar a la base de datos MongoDB", err));

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;