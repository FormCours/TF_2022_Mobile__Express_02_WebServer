'use strict';

// Chargement du fichier ".env" (Le plus tot possible !)
require('dotenv').config();
// console.log(process.env);

// Variable de config
const { PORT, MSG } = process.env;

// Création du serveur
const express = require('express');
const server = express();

// Configuration du moteur de vue
server.set('view engine', 'pug');
server.set('views', './views');

// Ajout des fichiers static
server.use(express.static('public'));

// Ajout du routing
const router = require('./routers/router');
server.use(router);

// Démarrage du serveur
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});