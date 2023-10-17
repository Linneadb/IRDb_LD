using IRDb_LD.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace IRDb_LD.Database
{
    public class MovieDbContext : DbContext
    {
        public DbSet<MovieModel> Movies { get; set; } //The db table that will later be instanciated in the repository to interact with the db content
		public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) //Constructor
		{
		}
	}
}
