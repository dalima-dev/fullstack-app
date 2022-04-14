const medicsService = require('../services/medics.service');

const findMedicsController = (req, res) => {
  const allMedics = medicsService.findMedicsService();
  res.send(allMedics);
};

const findMedicByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenMedic = medicsService.findMedicByIdService(idParam);
  res.send(chosenMedic);
};

const createMedicController = (req, res) => {
  const medic = req.body;
  const newMedic = medicsService.createMedicService(medic);
  res.send(newMedic);
};

const updateMedicController = (req, res) => {
  const idParam = Number(req.params.id);
  const editedMedic = req.body;
  const updatedMedic = medicsService.updateMedicService(idParam, editedMedic);
  res.send(updatedMedic);
};

const deleteMedicController = (req, res) => {
  const idParam = Number(req.params.id);
  medicsService.deleteMedicService(idParam);
  res.send({ message: 'Medic deleted with success!' });
};

module.exports = {
  findMedicsController,
  findMedicByIdController,
  createMedicController,
  updateMedicController,
  deleteMedicController,
};
