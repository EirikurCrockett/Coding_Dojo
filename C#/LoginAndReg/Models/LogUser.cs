using System;
using System.ComponentModel.DataAnnotations;

namespace LoginAndReg.Models
{
    public class LogUser
    {
        [Required(ErrorMessage = "Invalid Email/Password")]
        [EmailAddress(ErrorMessage = "Invalid Email/Password")]
        public string Email { get; set;}

        [Required(ErrorMessage = "Invalid Email/Password")]
        [DataType(DataType.Password, ErrorMessage = "Invalid Email/Password")]
        public string Password { get; set;}
    }
}
