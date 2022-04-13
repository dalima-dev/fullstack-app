function Medic(id, name, CRM, phoneNumber, CEP, specialties) {
  this.id = id;
  this.name = name;
  this.CRM = CRM;
  this.phoneNumber = phoneNumber;
  this.CEP = CEP;
  this.specialties = specialties;
}

const medics = [
    {
        id: 1,
        
    }
];

const findMedicsService = () => medics;
const findMedicByIdService = (id) => medics.find((item) => item.id == id);

module.exports = {
  findMedicsService,
  findMedicByIdService,
};
