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
          const cardMarkup = `<div class="card-body">
                              <h5 class="card-title">${movie.title}</h5>
                              <ul class="card-text">
                              <li>Director: ${movie.director}</li>
                              <li>Year: ${movie.year}</li>
                              <li>Genre: ${movie.genre}</li>
                              </ul><a href="${buttonUrl}" class="btn btn-primary">Learn More</a>
                              </div>`;
          newMovieCard.innerHTML = cardMarkup;
          console.log(newMovieCard);
          cardGrid.appendChild(newMovieCard);
        })
}

//POST MOVIE

//Selectors

const nameInput = document.querySelector("#name-input");
const typeInput = document.querySelector("#type-input");
const addAnimalBtn = document.querySelector("#add-animal-btn");

//Eventlistener

//addAnimalBtn.addEventListener("click", addAnimal);

//Functions

function addMovie() {
    //read input content
    const title = titleInput.value
    const director = directorInput.value

    //TODO: Check for empty strings

    //create movie to be sent to the api
    const newMovie = {title: title, director: director}
 
    //console.log(newMovie)
    //send the movie to the api

fetch('https://localhost:7144/api/Movies'
    , {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
    });




  }