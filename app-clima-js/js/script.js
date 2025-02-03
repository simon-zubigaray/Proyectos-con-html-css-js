//API de la pagina -> https://openweathermap.org/

let btnBusqueda = document.querySelector('#botonBusqueda');

const API_URL_1 = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_URL_2 = '&appid=';
const API_Key = '01c3a7375ecfd93d58c61fbf21830270';
const dif_kelvin = 273.15;

btnBusqueda.addEventListener('click', () => {
  const ciudad = document.querySelector('#ciudadEntrada').value;

  if (ciudad != null && ciudad != '' && ciudad != undefined) {
    fetchDatosClima(ciudad)
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${API_URL_1}${ciudad}${API_URL_2}${API_Key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
};

function mostrarDatosClima(response) {
  const divDatosClima = document.querySelector('#datosClima');
  divDatosClima.innerHTML = '';

  const urlIcono_1 = 'https://openweathermap.org/img/wn/';
  const urlIcono_2 = '@2x.png';

  const nombreCiudad = response.name;
  const nombrePais = response.sys.country;
  const iconoTemperaturaCiudad = response.weather[0].icon;
  const temperaturaCiudad = convertirKelvinACelsius(response.main.temp);
  const descripcionCiudad = response.weather[0].description;
  const humedadCiudad = response.main.humidity;
  const sensacionTermicaCiudad = convertirKelvinACelsius(response.main.feels_like);

  const ciudadTitulo = document.createElement('h2');
  ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`;

  const ciudadIconoTemperatura = document.createElement('img');
  ciudadIconoTemperatura.srcset = `${urlIcono_1}${iconoTemperaturaCiudad}${urlIcono_2}`;

  const ciudadTemperatura = document.createElement('p');
  ciudadTemperatura.textContent = `La temperatura es: ${Math.floor(temperaturaCiudad)}ºC`;

  const ciudadDescripcion = document.createElement('p');
  ciudadDescripcion.textContent = `Condicion del clima: ${descripcionCiudad}`;

  const ciudadHumedad = document.createElement('p');
  ciudadHumedad.textContent = `La humedad es: ${humedadCiudad}%`;

  const ciudadSensacionTermica = document.createElement('p');
  ciudadSensacionTermica.textContent = `La sensacion termica es de: ${Math.floor(sensacionTermicaCiudad)}ºC`;

  // Aplicar clase de animación
  divDatosClima.classList.add('animated-element');
  ciudadTitulo.classList.add('animated-element');
  ciudadIconoTemperatura.classList.add('animated-element');
  ciudadTemperatura.classList.add('animated-element');
  ciudadDescripcion.classList.add('animated-element');
  ciudadHumedad.classList.add('animated-element');
  ciudadSensacionTermica.classList.add('animated-element');

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(ciudadIconoTemperatura);
  divDatosClima.appendChild(ciudadTemperatura);
  divDatosClima.appendChild(ciudadDescripcion);
  divDatosClima.appendChild(ciudadHumedad);
  divDatosClima.appendChild(ciudadSensacionTermica);

  // Activar la animación después de un breve tiempo para permitir la transición
  setTimeout(() => {
    ciudadTitulo.style.opacity = 1;
    ciudadIconoTemperatura.style.opacity = 1;
    ciudadTemperatura.style.opacity = 1;
    ciudadDescripcion.style.opacity = 1;
    ciudadHumedad.style.opacity = 1;
    ciudadSensacionTermica.style.opacity = 1;

    ciudadTitulo.style.transform = 'translateY(0)';
    ciudadIconoTemperatura.style.transform = 'translateY(0)';
    ciudadTemperatura.style.transform = 'translateY(0)';
    ciudadDescripcion.style.transform = 'translateY(0)';
    ciudadHumedad.style.transform = 'translateY(0)';
    ciudadSensacionTermica.style.transform = 'translateY(0)';
  }, 100);

};

function convertirKelvinACelsius(g_kelvin) {
  return g_kelvin - dif_kelvin;
};

