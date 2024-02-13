const express = require ('express');
const router = express.Router();
const eventController = require('../controllers/membreController');
router.post('/membres', eventController.createMembre);
router.get('/membres', eventController.getALLmembres);
router.get('/membres/:id', eventController.getMembreById);
router.put('/membres/:id', eventController.updateMembre);
router.delete('/membres/:id', eventController.deleteMembre);
module.exports=router;
