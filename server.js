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

// Récuperation des données du type "application/x-www-form-urlencoded"
server.use(express.urlencoded({ extended: true }));

// Ajout du routing
const router = require('./routers/router');
server.use(router);

// Démarrage du serveur
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// TODO Exercice :
// Ajouter les pages pour la gestion des produits
// - Une page avec la liste des produits
//   Elle affiche le nom et le prix de chaque produit avec un lien vers la page detail.
// - Une page avec le detail d'un produit
//   Elle affiche toutes les données d'un produit avec son image.