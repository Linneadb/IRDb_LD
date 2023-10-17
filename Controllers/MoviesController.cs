using IRDb_LD.Migrations;
using IRDb_LD.Models;
using IRDb_LD.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace IRDb_LD.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MoviesController : ControllerBase
	{
		private readonly IMoviesRepository _repo;

		public MoviesController(IMoviesRepository repo) //An instance of the repository is created in the controller on initiation
		{
			_repo = repo;
		}

		[HttpGet]
		public ActionResult<MovieModel[]> Get()
		{
			var allMovies = _repo.GetAllMovies();
			if (allMovies.Count() > 0)
				return Ok(allMovies);
			else
				return NotFound("No movies were found");
		}

		[HttpGet("{id}")]
		
		public ActionResult<MovieModel> GetById(int id)
		{
			var movie = _repo.GetMovieById(id);
			if (movie != null)
				return Ok(movie);
			else
				return NotFound("No movie with that id was found");
		}

		[HttpPost]
		public ActionResult<MovieModel> Post([FromBody] MovieModel movieToAdd)
		{
			if (!string.IsNullOrWhiteSpace(movieToAdd.Title))
			{
				MovieModel? addedMovie = _repo.AddMovie(movieToAdd);

				if (addedMovie == null)
					return BadRequest("No movie data was submitted");
				else
					return Ok(addedMovie);
			}
			else
				return BadRequest("No movie title was submitted");
		}

		[HttpPut("{id}")]
		public ActionResult<MovieModel> Put([FromBody] MovieModel movieToUpdate, int id)
		{
			if (!string.IsNullOrWhiteSpace(movieToUpdate.Title))
			{ 
				MovieModel? updatedMovie = _repo.UpdateMovie(movieToUpdate, id);

				if (updatedMovie == null)
					return NotFound($"No movie with {id} exists in database");
				else
					return Ok(updatedMovie);			
			}
			else
				return BadRequest("No movie title submitted");
		}

		[HttpDelete("{id}")]
		public ActionResult Delete(int id)
		{
			if (_repo.DeleteMovie(id) != null)
				return Ok($"Movie with id {id} deleted");
			else
				return NotFound("No movie with that id was found");
			
		}
	}
}
