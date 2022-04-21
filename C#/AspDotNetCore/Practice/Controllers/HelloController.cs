using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace YourNamePracticespace.Controllers     
{
    public class HelloController : Controller   
    {
        

        [HttpGet]       
        [Route("")]     
        public ViewResult Index()
        {
            return View();
        }



        /* Route Setup
            // Other code
            [HttpGet]
            [Route("")]
            // GET requests to "localhost:5000" go here
            public string Index()
            {
                // Method body
            }
            [HttpGet("about")]
            // GET requests to "localhost:5000/about" go here
            public string About()
            {
                // Method body
            }
            [HttpPost]
            [Route("submission")]
            // POST requests to "localhost:5000/submission" go here
            // (Don't worry about form submissions for now, we will get to those later!)
            public string FormSubmission(string formInput)
            {
                // Method body
            }
        */

        /* parameter routing 
            // Other code
            [HttpGet]
            [Route("{name}")]
            public string Index(string name)
            {
                return $"Hello {name}!";
            }
            [HttpGet]
            [Route("pizza/{topping}")]
            public string PizzaParty(string topping)
            {
                return $"Who's ready for a {topping} Pizza!";
            }
            [HttpGet]
            [Route("user/{name}/{location}/{age}")]
            public string UserInfo(string name, string location, int age)
            {
                return $"{name}, aged {age}, is from {location}";
            }
        */
    }
}

