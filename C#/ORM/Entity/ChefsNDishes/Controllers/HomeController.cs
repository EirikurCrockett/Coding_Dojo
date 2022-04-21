using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefsNDishes.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace ChefsNDishes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Chefs()
        {
            ViewBag.Chefs = _context.Chefs
                .Include(c => c.CookBook)
                .ToList();
            return View();
        }

        [HttpGet("chef/new")]
        public IActionResult NewChef()
        {
            return View();
        }

        [HttpPost("chef/new/add")]
        public IActionResult AddChef(Chef newChef)
        {
            if(ModelState.IsValid){
                TimeSpan timeDiff = DateTime.Now.Subtract(newChef.DoB);
                Double age = Math.Floor(timeDiff.Days/365.25);
                Console.WriteLine(age);
                if(age>=18)
                {
                    _context.Add(newChef);
                    _context.SaveChanges();
                    return RedirectToAction("Chefs");
                }
                else{
                    ModelState.AddModelError("DoB", "Chef Must Be 18 Years or Older");
                    return View("NewChef");
                }
                
            }
            return View("NewChef");
        }

        [HttpGet("dish")]
        public IActionResult Dishes()
        {
            ViewBag.Dishes = _context.Dishes
                .Include(d => d.Creator)
                .ToList();
            return View();
        }

        [HttpGet("dish/new")]
        public IActionResult NewDish()
        {
            ViewBag.Chefs = _context.Chefs
                .ToList();

            if(ViewBag.Chefs.Count == 0){
                ModelState.AddModelError("ChefId", "You Need To Add A Chef First");
                return View();
            }
            return View();
        }

        [HttpPost("dish/new/add")]
        public IActionResult AddDish(Dish newDish)
        {
            if(ModelState.IsValid){
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Dishes");
            }

            ViewBag.Chefs = _context.Chefs
                .ToList();

            return View("NewDish");
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
