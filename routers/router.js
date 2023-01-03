const HomeController = require('../controllers/home.controller');

// Création d'un objet "router"
const router = require('express').Router();

// - Home (index, contact)
router.get('/', HomeController.index);
router.get('/contact', HomeController.contact_GET);
router.post('/contact', HomeController.contact_POST);

// TODO Product (list, detail, ...)


// Export du router
module.exports = router;