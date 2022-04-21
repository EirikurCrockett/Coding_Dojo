using System;
using System.ComponentModel.DataAnnotations;

namespace LoginAndReg.Models
{
    public class RegUser
    {
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

        [Required(ErrorMessage = "Invalid Email/Password")]
        [MinLength(8, ErrorMessage = "Password Must Contain At Least 8 Characters")]
        [DataType(DataType.Password, ErrorMessage = "Please Enter A Valid Password")]
        public string Password { get; set;}

        [Required(ErrorMessage = "Please Confirm Password")]
        [DataType(DataType.Password, ErrorMessage = "Please Enter A Valid Password")]
        [Compare("Password", ErrorMessage = "Passwords Must Match")]
        [Display(Name= "Confirm Password")]
        public string ConfirmPassword { get; set;}


    }
}
