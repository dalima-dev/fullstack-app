const medics = [];

const findMedicsService = () => medics;

const findMedicByIdService = (id) => medics.find((medic) => medic.id == id);

const createMedicService = (newMedic) => {
  newMedic.id = medics.length + 1;
  medics.push(newMedic);
  return newMedic;
};

const updateMedicService = (id, editedMedic) => {
  editedMedic['id'] = id;
  const medicIndex = medics.findIndex((medic) => medic.id == id);
  medics[medicIndex] = editedMedic;
  return editedMedic;
};

const deleteMedicService = (id) => {
  const medicIndex = medics.findIndex((medic) => medic.id == id);
  return medics.splice(medicIndex, 1)[0]; //This returns the removed element.
};

module.exports = {
  findMedicsService,
  findMedicByIdService,
  createMedicService,
  updateMedicService,
  deleteMedicService,
};
