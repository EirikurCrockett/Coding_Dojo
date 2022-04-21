using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RandomPasscode.Models;
using Microsoft.AspNetCore.Http;



namespace RandomPasscode.Controllers
{
    public class HomeController : Controller
    {
        public string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            HttpContext.Session.SetInt32("PassNum", 0);
            return View();
        }


        [HttpGet("generate")]
        public IActionResult Generate()
        {
            string code = "";
            Random rand = new Random();
            for(int i = 0; i < 14; i++)
            {
                code = code + chars[rand.Next(0,chars.Length)];
            }
            HttpContext.Session.SetInt32("PassNum", HttpContext.Session.GetInt32("PassNum").Value + 1);
            HttpContext.Session.SetString("Passcode", code);
            
            return RedirectToAction("Passcode");
        }

        [HttpGet("passcode")]
        public IActionResult Passcode()
        {
            ViewBag.PassNum = HttpContext.Session.GetInt32("PassNum");
            ViewBag.Passcode = HttpContext.Session.GetString("Passcode");
            return View("Passcode");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
