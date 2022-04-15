const baseURL = 'http://192.168.0.6:3000/medic'; //You can access localhost server from wifi on your mobile device.

async function findAllMedics() {
  const response = await fetch(`${baseURL}/find-medics`);
  const medics = await response.json();

  medics.forEach((item) => {
    document.querySelector('#medicList').insertAdjacentHTML(
      'beforeend',
      `
       <div
          class="flex flex-row sm:flex-col gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <img
            src="./assets/foto.jpg"
            alt="image not loaded"
            class="w-20 sm:w-auto rounded"
          />
          <div>
            <p>Nome:</p>
            <p>${item.name}</p>
            <p>CRM:</p>
            <p>${item.CRM}</p>
          </div>
        </div>
       `,
    );
  });
}

findAllMedics();
