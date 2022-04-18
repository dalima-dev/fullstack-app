const address = '192.168.0.6'; //You may change this to localhost or 127.0.0.1 if you're not using a wi-fi connection.
const baseURL = `http://${address}:3000/medic`;

(async function () {
  //Here we push our medic list data into HTML.
  const response = await fetch(`${baseURL}/find-medics`);
  const medics = await response.json();

  medics.forEach(function (item) {
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
       <div onclick="findMedicById(${item.id}); openModalDetails();" class="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <img
            src="./assets/foto.jpg"
            alt="image not loaded"
          />
          <div>
            <p>ID: ${item.id}</p>
            <p>Nome: ${item.name}</p>
          </div>
        </div>
       `,
    );
  });
})();

async function findMedicById(idMedic) {
  const response = await fetch(`${baseURL}/find-medics/${idMedic}`);
  const medic = await response.json();
  const chosenMedicDiv = document.querySelector('#chosenMedic');

  let specialties = '';
  medic.specialties.forEach(function (specialty) {
    specialties += `<p>${specialty}</p>`;
  });

  chosenMedicDiv.innerHTML = `
  <div id="modalDetails" class="flex z-[9999] absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] flex-col justify-center gap-2 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80">
      <div class="flex justify-end"><a
        onclick="closeModalDetails()"
        class="mx-2 text-red-500 text-2xl transition-all ease-out duration-150 hover:scale-150 cursor-pointer"
      > x</a></div>
      <img
        src="./assets/foto.jpg"
        alt="image not loaded"
        class="object-cover w-60"
      />
    
    <div>
        <p>Name: ${medic.name}</p>
        <p>CRM: ${medic.CRM}</p>
        <p>Landline: ${medic.landline}</p>
        <p>Phone Number: ${medic.phoneNumber}</p>
        <p>CEP: ${medic.CEP}</p>
        <p>Specialties:</p>
        ${specialties}
    </div>
  </div>
  `;
}

function openModalDetails() {
  document.querySelector('#medicList').style.filter = 'blur(24px)';
  document.querySelector('header').style.filter = 'blur(24px)';
}

function closeModalDetails() {
  document.querySelector('#modalDetails').style.display = 'none';
  document.querySelector('#medicList').style.filter = 'blur(0)';
  document.querySelector('header').style.filter = 'blur(0)';
}

function openModalRegister() {
  document.querySelector('#overlay').style.display = 'block';
  document.querySelector('#medicList').style.filter = 'blur(24px)';
  document.querySelector('header').style.filter = 'blur(24px)';
}

function closeModalRegister() {
  document.querySelector('#overlay').style.display = 'none';
  document.querySelector('#medicList').style.filter = 'blur(0)';
  document.querySelector('header').style.filter = 'blur(0)';

  document.querySelector('#name').value = '';
  document.querySelector('#crm').value = '';
  document.querySelector('#landline').value = '';
  document.querySelector('#phoneNumber').value = '';
  document.querySelector('#cep').value = '';
  document.querySelector('input[name=alergology]').checked = false;
  document.querySelector('input[name=angiology]').checked = false;
  document.querySelector('input[name=bucoMaxillo]').checked = false;
  document.querySelector('input[name=clinicCardiology]').checked = false;
  document.querySelector('input[name=childrensCardiology]').checked = false;
  document.querySelector('input[name=headNeckSurgery]').checked = false;
  document.querySelector('input[name=cardiacSurgery]').checked = false;
  document.querySelector('input[name=chestSurgery]').checked = false;
}

async function registerMedic() {
  const name = document.querySelector('#name').value;
  const CRM = document.querySelector('#crm').value;
  const landline = document.querySelector('#landline').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;
  const CEP = document.querySelector('#cep').value;
  const specialties = [];

  const inputsNames = [
    'alergology',
    'angiology',
    'bucoMaxillo',
    'clinicCardiology',
    'childrensCardiology',
    'headNeckSurgery',
    'cardiacSurgery',
    'chestSurgery',
  ];
  for (let i = 0; i < inputsNames.length; i++)
    document.querySelector(`input[name=${inputsNames[i]}]`).checked &&
      specialties.push(
        document.querySelector(`input[name=${inputsNames[i]}]`).value,
      );
  // (a && b) is equivalent to if(a){ b }

  const medic = { name, CRM, landline, phoneNumber, CEP, specialties };

  const response = await fetch(`${baseURL}/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(medic),
  });

  const newMedic = await response.json();

  if (response.status != 400)
    //This if statement prevents of invalid data be shown on screen.
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
  <div onclick="findMedicById(${newMedic.id}); openModalDetails();" class="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src="./assets/foto.jpg"
          alt="image not loaded"
          class="rounded"
        />
        <div>
          <p>ID: ${newMedic.id}</p>
          <p>Nome: ${newMedic.name}</p>
        </div>
  </div>
  `,
    );
  closeModalRegister();
}
