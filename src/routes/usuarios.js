const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/userController');

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// GET /usuarios: Devuelve la lista completa de usuarios
router.get('/', requiredScopes("read:usuarios"), getAllUsers);

// GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID
router.get('/:id', requiredScopes("read:usuarios"), getUserById);

// POST /usuarios: Crea un nuevo usuario con la información proporcionada
router.post('/', requiredScopes("write:usuarios"), createUser);

// PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID
router.put('/:id', requiredScopes("write:usuarios"), updateUserById);

// DELETE /usuarios/:id: Elimina un usuario específico según su ID
router.delete('/:id', requiredScopes("write:usuarios"), deleteUserById);

module.exports = router;
