const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceController = require('../controllers/sauce');
const router = express.Router();

router.get('/', auth, sauceController.getAllSauce);
router.get('/:id', auth, sauceController.getSauce);
router.post('/', auth, multer, sauceController.addSauce);
router.put('/:id', auth, multer, sauceController.modifySauce);
router.delete('/:id', auth, sauceController.deleteSauce)

module.exports = router;