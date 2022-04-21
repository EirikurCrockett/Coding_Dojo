using System;
using System.ComponentModel.DataAnnotations;

namespace DojoSurveyValid.Models
{
    public class Survey
    {
        [Required(ErrorMessage = "You Must Enter Your Required.")]
        [MinLength(2, ErrorMessage = "Your Name Must Contain At Least 2 Characters")]
        [Display(Name= "Your Name")]
        public string Name {get; set;}
        [Required(ErrorMessage = "You Must Select A Location")]
        [Display(Name= "Dojo Location")]
        public string Location {get; set;}
        [Required(ErrorMessage = "You Must Select A Language")]
        [Display(Name= "Favorite Language")]
        public string Language {get; set;}
        [MinLength(20, ErrorMessage = "Any Comments Must Contain At Least 20 Characters")]
        [Display(Name= "Comments (optional)")]
        public string Comments {get; set;}
    }
}
