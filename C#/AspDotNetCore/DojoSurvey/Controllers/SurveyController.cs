using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace DojoSurvey.Controllers
{
    public class SurveyController : Controller
    {

        [HttpGet]       
        [Route("")]     
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost]
        [Route("check")]
        public IActionResult Check(string name, string location, string language, string comments)
        {  

            return RedirectToAction("results", new {
                Name = name,
                Location = location,
                Language = language,
                Comment = comments
            });

        }

        [HttpGet]
        [Route("results")]
        public ViewResult Results(string Name, string Location, string Language, string Comment)
        {
            @ViewBag.Name = Name;
            @ViewBag.Location = Location;
            @ViewBag.Language = Language;
            @ViewBag.Comment = Comment;
            return View("Results");
        }

    }
}
