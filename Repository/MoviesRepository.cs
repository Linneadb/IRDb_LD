using IRDb_LD.Database;
using IRDb_LD.Models;

namespace IRDb_LD.Repository
{
	public class MoviesRepository : IMoviesRepository
	{
		private MovieDbContext _context; 

		public MoviesRepository(MovieDbContext context) //An instance of the DbContext is created in the repository on initiation
		{
			_context = context;
		}

		public IEnumerable<MovieModel> GetAllMovies()
		{
			return _context.Movies.ToList();
		}

		public MovieModel? GetMovieById(int id)
		{
			return _context.Movies.FirstOrDefault(m => m.Id ==id);
		}
		public MovieModel? AddMovie(MovieModel movie)
		{
			if(movie != null) 
			{
				_context.Movies.Add(movie);
				_context.SaveChanges();
			}
			return movie;
		}
		public MovieModel? UpdateMovie(MovieModel movie, int id)
		{
			var movieToUpdate = _context.Movies.FirstOrDefault(m => m.Id == id);
				if (movieToUpdate != null)
				{
					movieToUpdate.Title = movie.Title;
					movieToUpdate.Director = movie.Director;
					movieToUpdate.Year = movie.Year;
					movieToUpdate.Genre = movie.Genre;
					movieToUpdate.Duration = movie.Duration;
					movieToUpdate.Rating = movie.Rating;
					_context.SaveChanges();
				}
			return movieToUpdate;
		}

		public MovieModel? DeleteMovie(int id)
		{
			var movieToDelete = _context.Movies.FirstOrDefault(m => m.Id == id);
			if (movieToDelete != null)
			{
				_context.Movies.Remove(movieToDelete);
				_context.SaveChanges();
			}
			return movieToDelete;
		}
	}
}
