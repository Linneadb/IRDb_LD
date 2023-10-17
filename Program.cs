
using IRDb_LD.Database;
using IRDb_LD.Repository;
using Microsoft.EntityFrameworkCore;
using System;

namespace IRDb_LD
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var connectionString = builder.Configuration.GetConnectionString("MoviesDbConnection"); //The name and path of the connectionstring is set in the appsettings
			builder.Services.AddDbContext<MovieDbContext>(options => options.UseSqlServer(connectionString));

			builder.Services.AddScoped<IMoviesRepository, MoviesRepository>(); //Adding the repro to the dependency container. AddScoped creates a new instance for each request

			builder.Services.AddCors(options =>                                 //Creates CORS policy that allows requests from any origin
			{
				options.AddPolicy(name: "AllowAll", policy =>

				{
					policy.AllowAnyOrigin()
					.AllowAnyMethod()
					.AllowAnyHeader();
				});
			});

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.UseCors("AllowAll");

			app.Run();
		}
	}
}