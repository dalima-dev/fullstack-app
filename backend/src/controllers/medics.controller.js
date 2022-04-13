const medicsService = require('../services/medics.service').default;

const findMedicsController = (req, res) => {
  const allMedics = medicsService.findMedicsService();
  res.send(allMedics);
};

const findMedicByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenMedic = medicsService.findMedicByIdService(idParam);
  res.send(chosenMedic);
};

module.exports = {
  findMedicsController,
  findMedicByIdController,
};
