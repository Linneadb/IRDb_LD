using IRDb_LD.Models;

namespace IRDb_LD.Repository
{
    public interface IMoviesRepository
    {
        public IEnumerable<MovieModel> GetAllMovies();
        public MovieModel? GetMovieById(int id);
        public MovieModel? AddMovie(MovieModel movie);
        public MovieModel? UpdateMovie(MovieModel movie, int id);
        public MovieModel? DeleteMovie(int id);
    }
}
