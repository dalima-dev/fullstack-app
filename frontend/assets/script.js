const address = '192.168.0.6'; //You may change this to localhost or 127.0.0.1 if you're not using a wi-fi connection.
const baseURL = `http://${address}:3000/medic`;

(async () => {
  //Here we push our medic list data into HTML.
  const response = await fetch(`${baseURL}/find-medics`);
  const medics = await response.json();

  medics.forEach((item) => {
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
       <div onclick="findMedicById(${item.id})" class="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <img
            src="./assets/foto.jpg"
            alt="image not loaded"
            class="rounded"
          />
          <div>
            <p>ID: ${item.id}</p>
            <p>Nome:</p>
            <p>${item.name}</p>
          </div>
        </div>
       `,
    );
  });
})();

async function findMedicById(idMedic) {
  const response = await fetch(
    `${baseURL}/find-medics/${idMedic}`,
  );
  const medic = await response.json();
  const chosenMedicDiv = document.querySelector('#chosenMedic');

  chosenMedicDiv.innerHTML = `
  <div class="flex flex-row items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 cursor-pointer">
      <img
        src="./assets/foto.jpg"
        alt="image not loaded"
        class=" w-20 md:w-auto rounded"
      />
    
    <div>
        <p>ID: ${medic.id}</p>
        <p>Nome:</p>
        <p>${medic.name}</p>
    </div>
  </div>
  `;
}

function closeModalRegister() {
  document.querySelector('#overlay').style.display = 'none';
  document.querySelector('#medicList').style.filter = 'blur(0)';
  document.querySelector('#searchById').style.filter = 'blur(0)';
  document.querySelector('h2').style.filter = 'blur(0)';

  document.querySelector('#name').value = '';
  document.querySelector('#crm').value = '';
  document.querySelector('#landline').value = '';
  document.querySelector('#phoneNumber').value = '';
  document.querySelector('#cep').value = '';
  document.querySelector('#specialtiesNumber').value = '';
  document.querySelector('#specialtiesInputs').innerHTML = '';
}

function openModalRegister() {
  document.querySelector('#overlay').style.display = 'block';
  document.querySelector('#medicList').style.filter = 'blur(24px)';
  document.querySelector('#searchById').style.filter = 'blur(24px)';
  document.querySelector('h2').style.filter = 'blur(24px)';
}

function addSpecialtiesInputs() {
  const specialtiesNumber = document.querySelector('#specialtiesNumber').value;

  if (specialtiesNumber > 12) return; //Maximum number of 12 specialties.

  const specialtiesInputsDiv = document.querySelector('#specialtiesInputs');
  specialtiesInputsDiv.innerHTML = '';

  for (let i = 0; i < specialtiesNumber; i++)
    specialtiesInputsDiv.innerHTML += `
    <input
      class="p-1 m-1 text-black border-2 border-slate-600"
      type="text"
      id="specialty${i + 1}"
      name="Specialty"
      placeholder="Specialty ${i + 1}"
    />
    `;
}

async function registerMedic() {
  const name = document.querySelector('#name').value;
  const CRM = document.querySelector('#crm').value;
  const landline = document.querySelector('#landline').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;
  const CEP = document.querySelector('#cep').value;
  const specialtiesNumber = document.querySelector('#specialtiesNumber').value;
  const specialties = [];

  for (let i = 0; i < specialtiesNumber; i++)
    specialties.push(document.querySelector(`#specialty${i + 1}`).value);

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

  if (response.status != 400) //This prevents of invalid data be shown on screen.
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
  <div class="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src="./assets/foto.jpg"
          alt="image not loaded"
          class="rounded"
        />
        <div>
          <p>ID: ${newMedic.id}</p>
          <p>Nome:</p>
          <p>${newMedic.name}</p>
        </div>
  </div>
  `,
    );
  closeModalRegister();
}
