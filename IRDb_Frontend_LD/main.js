//GET ALL

fetch('https://localhost:7144/api/Movies')
.then(res=> res.json())
.then((data) => 
{
    MakeMovieCards(data)
})
.catch(error => console.log(error))

//Select moviecard
const cardBody = document.querySelector("card-body")

//<div class="card-body">
  //                      <h5 class="card-title">Movie Title</h5>
    //                    <ul class="card-text"></ul>
      //                  <a href="#" class="btn btn-primary">Learn More</a>
        //            </div>

function MakeMovieCards()
{
    data.forEach(movie =>
        {
            const htmlMarkup = '<li>$"Director: {movie.director}</li><li>$"Year: {movie.year}</li><li>"$Genre: {movie.genre}</li>';
        })

}