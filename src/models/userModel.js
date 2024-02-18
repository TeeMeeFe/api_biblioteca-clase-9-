const mongoose = require("mongoose");

// Definir el esquema de usuario
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "usuarios" }
);

// Crear el modelo de usuario basado en el esquema
const User = mongoose.model("User", userSchema);

module.exports = User;
