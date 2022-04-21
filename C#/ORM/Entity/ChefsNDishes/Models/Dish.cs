using System;
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required(ErrorMessage = "Required")]
        [MinLength(2, ErrorMessage = "Dish Name Must Contain At Least 2 Characters")]
        [Display(Name= "Name of Dish")]
        public string Name {get;set;}


        [Required(ErrorMessage = "Required")]
        [Range(1, 5, ErrorMessage = "Tastiness Must Be Between 1 And 5")]
        [Display(Name= "Tastiness")]
        public int Tastiness {get;set;}

        [Required(ErrorMessage = "Required")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Calories Must be Greater than 0")]
        [Display(Name= "# of Calories")]
        public int Calories {get;set;}

        [Required(ErrorMessage = "Required")]
        [MinLength(20, ErrorMessage = "Description Must Contain At Least 20 Characters")]
        [Display(Name= "Description")]
        public string Description {get;set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [Required(ErrorMessage = "Required")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Required")]
        [Display(Name= "Chef's Name")]
        public int ChefId {get;set;}

        //Nav
        public Chef Creator { get; set;}
    }
}
