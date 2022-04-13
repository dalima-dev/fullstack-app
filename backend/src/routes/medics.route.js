const router = require('express').Router();
const medicsController = require('../controllers/medics.controller');

router.get('/find-medics', medicsController.findMedicsController);
router.get('/find-medics/:id', medicsController.findMedicByIdController);

module.exports = router;
