const router = require('express').Router();
const medicsController = require('../controllers/medics.controller');

router.get('/find-medics', medicsController.findMedicsController);
router.get('/find-medics/:id', medicsController.findMedicByIdController);
router.get('/details/:id', () => {}) //For later use.
router.post('/create', medicsController.createMedicController);
router.put('/update/:id', medicsController.updateMedicController);
router.delete('/delete/:id', medicsController.deleteMedicController);

module.exports = router;
