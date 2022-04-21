using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsCategories
{
    public class Category
    {
        [Key]
        public int CategoryId { get;set;}
        [Required(ErrorMessage = "Required")]
        [MinLength(3, ErrorMessage = "Minimum Length 2 Characters" )]
        // [RegularExpression(@"^[a-zA-Z''-'\s]$", ErrorMessage = "Alphabetical Characters Only")]
        public string Name { get;set;}
        public DateTime CreatedAt { get;set;} = DateTime.Now;
        public DateTime UpdatedAt { get;set;} = DateTime.Now;

        //Nav
        public List<Association> Associations { get;set;}
    }
}