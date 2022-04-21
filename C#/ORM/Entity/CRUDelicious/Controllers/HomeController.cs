using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.RecentDishes = _context.Dishes
                .OrderByDescending(dish => dish.CreatedAt)
                .Take(5)
                .ToList();

            return View();
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("New");
            }
        }

        [HttpPost("dish/{dishId}/update")]
        public IActionResult Update(int dishId, Dish dish)
        {
            Dish RetrievedDish = _context.Dishes
                .FirstOrDefault(dish => dish.DishId == dishId);
                
            if(ModelState.IsValid){
                    
                
                RetrievedDish.Name=dish.Name;
                RetrievedDish.Chef=dish.Chef;
                RetrievedDish.Tastiness=dish.Tastiness;
                RetrievedDish.Calories= dish.Calories;
                RetrievedDish.Description= dish.Description;
                RetrievedDish.UpdatedAt = DateTime.Now;

                _context.SaveChanges();

                return RedirectToAction("Dish", new {dishId});
            }
            else{
                return View("Edit", RetrievedDish);
            }

        }

        [HttpGet("dish/delete/{dishId}")]
        public IActionResult Delete(int dishId)
        {
            Dish RetrievedDish = _context.Dishes
                .FirstOrDefault(dish => dish.DishId == dishId);

            _context.Dishes.Remove(RetrievedDish);

            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpGet("dish/{dishId}")]
        public IActionResult Dish(int dishId)
        {
            Dish DishToView = _context.Dishes
                .FirstOrDefault(dish => dish.DishId == dishId);
            
            return View(DishToView);
        }
        
        [HttpGet("dish/{dishId}/edit")]
        public IActionResult Edit(int dishId)
        {
            Dish DishToUpdate = _context.Dishes
                .FirstOrDefault(dish => dish.DishId == dishId);

            return View(DishToUpdate);
        }

        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
