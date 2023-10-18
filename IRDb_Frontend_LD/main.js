//Select moviecard-grid
const cardGrid = document.querySelector("#grid")

//GET ALL MOVIES

fetch('https://localhost:7144/api/Movies')
.then(res=> res.json())
.then((data) => 
{
  //console.log(data)  
  MakeMovieCards(data)
})
.catch(error => console.log(error))


function MakeMovieCards(data)
{
    data.forEach(movie =>
        {
          var newMovieCard = document.createElement('div');
          newMovieCard.className = "card movie-card";
          newMovieCard.id = `${movie.id}`;
          //var urlTitle = "The little mermaid";
          var urlTitle = encodeURIComponent(movie.title)
          console.log(urlTitle);
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

//Selectors

//const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector('form');
//const inputs = Array.from(document.querySelectorAll('input'));


//Event Listener with add movie functionality
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Read input content
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = parseInt(document.getElementById('year').value);
    const genre = document.getElementById('genre').value;
    const duration = parseInt(document.getElementById('duration').value);
    const rating = parseFloat(document.getElementById('rating').value);

    // Check for empty strings/Nan-values
    if (!title || !director || isNaN(year) || isNaN(duration) || isNaN(rating)) {
        alert('Please fill out all fields with valid values.');
        return;
    }

    // Create newMovie as JSON
    const newMovie = {
        title: title,
        director: director,
        year: year,
        genre: genre,
        duration: duration,
        rating: rating
    };

    console.log(newMovie);

    fetch('https://localhost:7144/api/Movies'
    , {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
    });

    //GET ALL MOVIES

    fetch('https://localhost:7144/api/Movies')
    .then(res=> res.json())
    .then((data) => 
    {
      //console.log(data)  
      MakeMovieCards(data)
    })
    .catch(error => console.log(error))
});

//

//Functions

//function addMovie() {
  
    

    //TODO: Check for empty strings

    //create movie to be sent to the api
   
 
    //console.log(newMovie)
    //send the movie to the api
    //read input content, check for empty strings and create movie
    //const newMovie = {};
    //inputs.forEach(input => {
      //if(input != null)
        //newMovie[input.name] = input.value;
   // });

    //console.log(newMovie)
 // });




