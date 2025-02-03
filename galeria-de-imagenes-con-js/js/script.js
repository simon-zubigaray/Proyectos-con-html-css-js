let urlCats = 'https://api.thecatapi.com/v1/images/search';
let urlCatsFacts = 'https://cat-fact.herokuapp.com/facts';

let urlDogs = 'https://api.thedogapi.com/v1/images/search';
let urlJoke = 'https://official-joke-api.appspot.com/random_joke';


const error = document.querySelector('.error');

let catButton = document.querySelector('.cat');
let dogButton = document.querySelector('.dog');

let containerImages = document.querySelector('.containerImages');

catButton.addEventListener('click', loadCat);
dogButton.addEventListener('click', loadDog);

async function loadCat() {
  const response = await fetch(urlCats);
  const data = await response.json();

  const responseFacts = await fetch(urlCatsFacts);
  const dataFacts = await responseFacts.json();

  if (response.status !== 200) {
    error.classList.remove('hidden');
    error.innerHTML = "There was a mistake: " + response.status;
  }
  else {
    const image = document.querySelector('.cat-image');
    image.classList.add('img');
    image.src = data[0].url;

    const fact = document.querySelector('#factCat');
    fact.textContent = dataFacts[Math.round(Math.random() + data.length)].text;
  }
}

async function loadDog() {
  let response = await fetch(urlDogs);
  let data = await response.json();

  let responseJoke = await fetch(urlJoke);
  let dataJoke = await responseJoke.json();

  if (response.status !== 200) {
    error.classList.remove('hidden');
    error.innerHTML = "There was a mistake: " + response.status;
  }
  else {
    const image = document.querySelector('.dog-image');
    image.classList.add('img');
    image.src = data[0].url;

    const fact = document.querySelector('#factDog');
    fact.textContent = dataJoke.setup + ' ' + dataJoke.punchline;
  }
}

loadCat();
loadDog();