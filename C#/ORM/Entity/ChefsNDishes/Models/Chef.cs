using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
    public class Chef
    {
        public int ChefId {get;set;}

        [Required(ErrorMessage = "Required")]
        [Display(Name = "First Name")]
        [MinLength(2, ErrorMessage = "First Name Must Be At Least 2 Characters")]
        public string FirstName {get;set;}
        [Required(ErrorMessage = "Required")]
        [Display(Name = "Last Name")]
        [MinLength(2, ErrorMessage = "Last Name Must Be At Least 2 Characters")]
        public string LastName {get;set;}

        [Required]
        [Display(Name = "Date of Birth")]
        public DateTime DoB {get;set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        //Nav
        public List<Dish> CookBook {get;set;}
    }
}
