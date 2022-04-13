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
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca']
  },
  {
    id: 2,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca']
  },
  {
    id: 3,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca']
  },
  {
    id: 4,
    name: 'Roberta Almeida Silva',
    CRM: 70001,
    landline: 33028647,
    CEP: 50050590,
    specialties: ['Cirurgia cabeça e pescoço', 'Cardiologia clínca']
  },
];

const findMedicsService = () => medics;
const findMedicByIdService = (id) => medics.find((item) => item.id == id);

module.exports = {
  findMedicsService,
  findMedicByIdService,
};
