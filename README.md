# api_biblioteca-clase-9-

Hecho en JavaScript, con Node.js usando express, MongoDB como una base de datos NoSQL y el OPM mongoose para el manejo de la misma. Con autenticación en API tipo token OAuth 2.0. Nuevo endpoint creado `Usuarios` con Codeium Clase N°9. Profesor Rubén Romero. UVE-UTN.

# Uso y ejecución

Desde VSCode o un terminal, en el directorio de instalación, tipea el comando ´npm start´ para ejecutar el programa.

# Uso API

La API posee las siguientes rutas y funcionalidades:

### Libros

a. GET /api/libros - Devuelve la lista completa de libros.

b. GET /api/libros/:id: - Devuelve los detalles de un libro específico según su ID.

c. POST /api/libros - Crea un nuevo libro con la información proporcionada.

d. PUT /api/libros/:id: - Actualiza la información de un libro específico según su ID.

e. DELETE /api/libros/:id: - Elimina un libro específico según su ID.

### Usuarios

a. GET /usuarios: Devuelve la lista completa de usuarios.

b. GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID.

c. POST /usuarios: Crea un nuevo usuario con la información proporcionada.

d. PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID.

e. DELETE /usuarios/:id: Elimina un usuario específico según su ID.
