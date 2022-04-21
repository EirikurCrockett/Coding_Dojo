using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsCategories
{
    public class Product
    {
        [Key]
        public int ProductId { get;set;}
        [Required(ErrorMessage = "Required")]
        // [RegularExpression(@"^[a-zA-Z''-'\s]$", ErrorMessage = "Alphabetical Characters Only")]
        public string Name { get;set;}
        [Required(ErrorMessage = "Required")]
        public string Description { get;set;}
        [Required(ErrorMessage = "Required")]
        [Range(0.01, Double.MaxValue, ErrorMessage = "Price Must Be At Least $0.01")]
        public double Price { get;set;}
        public DateTime CreatedAt { get;set;} = DateTime.Now;
        public DateTime UpdatedAt { get;set;} = DateTime.Now;

        //Nav
        public List<Association> Associations { get;set;}
    }
}