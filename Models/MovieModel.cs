using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace IRDb_LD.Models
{
	public class MovieModel
	{
		public int Id { get; set; }
		//[Required(AllowEmptyStrings = false)] // means that the db column has to contain values, not empty strings
		//[DisplayFormat(ConvertEmptyStringToNull = true)]
		public string Title { get; set; } = null!; //still allows empty strings, but not null values
		public string? Director { get; set; } // nullable means that the db column can contain empty values
		public int? Year { get; set; }
		public string? Genre { get; set; }
		public int? Duration { get; set; }
		public double? Rating { get; set; }

	}
}
