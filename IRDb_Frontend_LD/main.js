//Select moviecard-grid
const cardGrid = document.querySelector("#grid")
getAllMovies();

//GET ALL MOVIES
function getAllMovies(){
fetch('https://localhost:7144/api/Movies')
.then(res=> res.json())
.then((data) => 
{
  MakeMovieCards(data)
})
.catch(error => console.log(error))
}

function MakeMovieCards(data)
{
    data.forEach(movie =>
        {
          var newMovieCard = document.createElement('div');
          newMovieCard.className = "card movie-card";
          newMovieCard.id = `${movie.id}`;
          var urlTitle = encodeURIComponent(movie.title)
          var buttonUrl = `http://www.google.com/search?q=imdb+%22${urlTitle}%22&btnI=I%27m+Feeling+Lucky`
          const cardMarkup = `<div class="movie-card">
                              <h5 class="card-title">${movie.title}</h5>
                              <ul class="card-text">
                              <li>Director: ${movie.director}</li>
                              <li>Year: ${movie.year}</li>
                              <li>Genre: ${movie.genre}</li>
                              </ul>
                              <a href="${buttonUrl}" class="btn btn-primary">Read more at IMDb</a>
                              </div>`;
          newMovieCard.innerHTML = cardMarkup;
          console.log(newMovieCard);
          cardGrid.appendChild(newMovieCard);
        })
}

//POST MOVIE

//Select submit-button
const submitBtn = document.querySelector("#submit-btn");

//Event Listener with add movie functionality
submitBtn.addEventListener('click', addMovie); 

function addMovie()
{
  // Read input content
  const title = document.getElementById('title').value;
  const director = document.getElementById('director').value;
  const year = parseInt(document.getElementById('year').value);
  const genre = document.getElementById('genre').value;
  const duration = parseInt(document.getElementById('duration').value);
  const rating = parseFloat(document.getElementById('rating').value);

  // Check for empty strings/Nan-values
  if (!title || !director || isNaN(year) || isNaN(duration) || isNaN(rating)) {
      const newMovie = {
      title: title,
      director: director,
      year: year,
      genre: genre,
      duration: duration,
      rating: rating
  };
  }

  //POST newMovie to database

  fetch('https://localhost:7144/api/Movies'
  , {
      method:"POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
  }).then(() => {getAllMovies();})
  ;
};


//SEARCH MOVIE

//Select search button
const searchBtn = document.getElementById('search-btn')

//Eventlistener
searchBtn.addEventListener('click', searchMovieTitle)

function searchMovieTitle(){
  //Select search input field
  const searchInput = document.getElementById('search');
  //Select all movie card titles
  const movieTitles = Array.from(document.querySelectorAll(".card-title"))
  movieTitles.forEach(title => {
    if(searchInput.value.toLowerCase() == title.innerText.toLowerCase())
    {      
      title.parentElement.style.background = "#ffffff";
      title.parentElement.parentElement.style.background = "#ffffff";
    }
    else
    {
      title.parentElement.style.background = "#dafb8";
      title.parentElement.parentElement.style.background = "#dafb8";
      searchInput.style.color = "red";
    }
  })
}

