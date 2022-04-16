const address = '192.168.0.6'; //You may change this to localhost or 127.0.0.1 if you're not using a wi-fi connection.
const baseURL = `http://${address}:3000/medic`;

async function findAllMedics() {
  const response = await fetch(`${baseURL}/find-medics`);
  const medics = await response.json();

  medics.forEach((item) => {
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
       <div class="flex flex-col gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <img
            src="./assets/foto.jpg"
            alt="image not loaded"
            class="w-16 md:w-auto rounded"
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
}

async function findMedicById() {
  const id = document.querySelector('#idMedic').value;
  const response = await fetch(`${baseURL}/find-medics/${id}`);

  const medic = await response.json();
  const chosenMedicDiv = document.querySelector('#chosenMedic');

  chosenMedicDiv.innerHTML = `
  <div class="flex flex-row items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80">
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

function closeModalRegister() {}

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
      name="Specialty"
      placeholder="Specialty ${i + 1}"
      required
    />
    `;
}

findAllMedics();
