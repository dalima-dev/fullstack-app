const medicsService = require('../services/medics.service');

const findMedicsController = (req, res) => {
  const allMedics = medicsService.findMedicsService();
  res.send(allMedics);
};

const findMedicByIdController = (req, res) => {
  const idParam = Number(req.params.id);

  //idParam with string or 0 value doesn't pass the test.
  if (!idParam) res.status(404).send({ message: 'Medic not found!' });

  const chosenMedic = medicsService.findMedicByIdService(idParam);
  res.send(chosenMedic);
};

const createMedicController = (req, res) => {
  const medic = req.body;

  //Testing if all fields are filled.
  if (
    !medic ||
    !medic.name ||
    !medic.CRM ||
    !medic.landline ||
    !medic.phoneNumber ||
    !medic.CEP ||
    !(
      medic.specialties.length > 1 &&
      medic.specialties.every((specialty) => specialty != '')
    )
    //This checks if each specialty string is empty. If all strings of medic.specialties have length other than 0, then it passes the test.
    //Note that strings always have length > 0.
  )
    return res.status(400).send({ message: `You didn't fill all fields!` });

  const newMedic = medicsService.createMedicService(medic);
  res.send(newMedic);
};

const updateMedicController = (req, res) => {
  const idParam = Number(req.params.id);
  const editedMedic = req.body;

  if (!idParam) {
    return res.status(404).send({ message: 'Medic not found!' });
  }

  //Testing if all fields are filled.
  if (
    !editedMedic ||
    !editedMedic.name ||
    !editedMedic.CRM ||
    !editedMedic.landline ||
    !editedMedic.phoneNumber ||
    !editedMedic.CEP ||
    !(
      editedMedic.specialties.length > 1 &&
      editedMedic.specialties.every((specialty) => specialty != '')
    )
  )
    return res.status(400).send({ message: `You didn't fill all fields!` });

  const updatedMedic = medicsService.updateMedicService(idParam, editedMedic);
  res.send(updatedMedic);
};

const deleteMedicController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam)
    return res.status(404).send({ message: 'Paleta não encontrada!' });

  const deletedMedic = medicsService.deleteMedicService(idParam);
  res.send({ message: `Medic ${deletedMedic.name} removed with success!` });
};

module.exports = {
  findMedicsController,
  findMedicByIdController,
  createMedicController,
  updateMedicController,
  deleteMedicController,
};
