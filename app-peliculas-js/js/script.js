document.querySelector('#searchButton').addEventListener('click', searchMovies);

let url_p1 = 'https://api.themoviedb.org/3/search/movie?query=';
let url_p2 = '&api_key=';
let api_key = 'be9838ac0bc16a5f0c1e96c050ec22d4';
let url_image = 'https://image.tmdb.org/t/p/w500';
let url = 'Jack+Reacher&api_key=be9838ac0bc16a5f0c1e96c050ec22d4';
let resultContainer = document.querySelector('#results');

function searchMovies() {
  resultContainer.classList.add('loading');
  resultContainer.innerHTML = '<p>Cargando...</p>';

  let searchInput = document.querySelector('#searchInput').value;

  fetch(`${url_p1}${searchInput}${url_p2}${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response))
}

function displayMovies(movies) {
  resultContainer.innerHTML = '';
  resultContainer.classList.remove('loading');

  if (movies.results.length === 0) {
    resultContainer.classList.add('loading');
    resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda.</p>';
    return
  }

  movies.results.forEach(movie => {
    let movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    let title = document.createElement('h2');
    title.textContent = movie.title;

    let poster = document.createElement('img');
    poster.srcset = `${url_image}${movie.poster_path}`;

    let releaseDate = document.createElement('p');
    releaseDate.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`;

    let overview = document.createElement('p');
    overview.textContent = movie.overview;

    movieDiv.appendChild(title);
    movieDiv.appendChild(poster);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);

    resultContainer.appendChild(movieDiv);
  });
}