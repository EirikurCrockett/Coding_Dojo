using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegWithDb.Models
{
    public class User
    {
        [Key]
        public int UserId {get; set;}

        [Required(ErrorMessage = "First Name Is Required")]
        [MinLength(2, ErrorMessage = "First Name Must Contain At Least 2 Characters")]
        [Display(Name= "First Name")]
        public string FirstName { get; set;}

        [Required(ErrorMessage = "Last Name Is Required")]
        [MinLength(2, ErrorMessage = "Last Name Must Contain At Least 2 Characters")]
        [Display(Name= "Last Name")]

        public string LastName { get; set;}


        [Required(ErrorMessage = "Email Is Required")]
        [EmailAddress(ErrorMessage = "Please Enter A Valid Email")]
        public string Email { get; set;}

        [Required(ErrorMessage = "Password Is Required")]
        [DataType(DataType.Password)]
        public string Password { get; set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [NotMapped]
        [Required(ErrorMessage = "Please Confirm Password")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Passwords Must Match")]
        [Display(Name= "Confirm Password")]
        public string ConfirmPassword { get; set;}




    }
}
