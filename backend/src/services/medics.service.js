const medics = [
  {
    id: 1,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 2,
    name: 'Carlos Gustavo Pereira',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 3,
    name: 'Robert Good Boy',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 4,
    name: 'Robert Plank',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 5,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 6,
    name: 'Carlos Gustavo Pereira',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 7,
    name: 'Robert Good Boy',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 8,
    name: 'Robert Plank',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 9,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 10,
    name: 'Carlos Gustavo Pereira',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 11,
    name: 'Robert Good Boy',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca'],
  },
  {
    id: 12,
    name: 'Robert Plank',
    CRM: 70001,
    landline: 33028647,
    phoneNumber: 998276543,
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
