using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegWithDb.Models
{
    public class LogUser
    {

        [Required(ErrorMessage = "Invalid Email/Password")]
        [EmailAddress(ErrorMessage = "Invalid Email/Password")]
        public string LogEmail { get; set;}

        [Required(ErrorMessage = "Invalid Email/Password")]
        [DataType(DataType.Password, ErrorMessage = "Invalid Email/Password")]
        public string LogPassword { get; set;}
    }
}
