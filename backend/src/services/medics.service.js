function Medic(id, name, CRM, landline, phoneNumber, CEP, specialties) {
  this.id = id;
  this.name = name;
  this.CRM = CRM;
  this.landline = landline;
  this.phoneNumber = phoneNumber;
  this.CEP = CEP;
  this.specialties = specialties;
}

const medics = [
  {
    id: 1,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 2,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 3,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 4,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
];

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
  const medicIndex = medics.findIndex(medic.id == id);
  return medics.splice(medicIndex, 1);
};

module.exports = {
  findMedicsService,
  findMedicByIdService,
  createMedicService,
  updateMedicService,
  deleteMedicService,
};
