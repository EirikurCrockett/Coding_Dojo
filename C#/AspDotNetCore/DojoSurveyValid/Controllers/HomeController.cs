using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoSurveyValid.Models;

namespace DojoSurveyValid.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost("submission")]
        public IActionResult Submission(Survey dojoSurvey)
        {
            if(ModelState.IsValid)
            {
                return RedirectToAction("Results", dojoSurvey);
            }
            else{
                return View("Index");
            }

            
        }

        [HttpGet("results")]
        public IActionResult Results(Survey dojoSurvey)
        {
            return View("Results", dojoSurvey);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
