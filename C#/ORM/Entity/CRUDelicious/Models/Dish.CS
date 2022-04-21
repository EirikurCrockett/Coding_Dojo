using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required(ErrorMessage = "Name of Dish Is Required")]
        [MinLength(2, ErrorMessage = "Dish Name Must Contain At Least 2 Characters")]
        [Display(Name= "Name of Dish")]
        public string Name {get;set;}
        [Required(ErrorMessage = "Chef's Name Is Required")]
        [MinLength(2, ErrorMessage = "Chef's Name Must Contain At Least 2 Characters")]
        [Display(Name= "Chef's Name")]
        public string Chef {get;set;}
        [Required(ErrorMessage = "Tastiness Is Required")]
        [Range(1, 5, ErrorMessage = "Tastiness Must Be Between 1 And 5")]
        [Display(Name= "Tastiness")]
        public int Tastiness {get;set;}
        [Required(ErrorMessage = "Calories Are Required")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Calories Must be Greater than 0")]
        [Display(Name= "# of Calories")]
        public int Calories {get;set;}
        [Required(ErrorMessage = "Description Is Required")]
        [MinLength(20, ErrorMessage = "Description Must Contain At Least 20 Characters")]
        [Display(Name= "Description")]
        public string Description {get;set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
