using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsCategories.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return RedirectToAction("Product");
        }

        [HttpGet("product")]
        public IActionResult Product()
        {
            ViewBag.Products = _context.Products.ToList();

            return View();
        }

        [HttpPost("product/new")]
        public  IActionResult NewProduct(Product newProd)
        {
            if(ModelState.IsValid){
                _context.Add(newProd);
                _context.SaveChanges();
                return RedirectToAction("Product");
            }

            ViewBag.Products = _context.Products.ToList();

            return View("Product");
        }

        [HttpGet("product/{productId}")]
        public IActionResult OneProduct(int productId)
        {
            ViewBag.Product = _context.Products
                .Include(prod => prod.Associations)
                    .ThenInclude(assoc => assoc.Category)
                .FirstOrDefault(prod => prod.ProductId == productId);

            ViewBag.Categories = _context.Categories.ToList();

            return View();
        }

        [HttpPost("product/add_category")]
        public IActionResult ProductAddCategory(Association newAssoc)
        {
            if(ModelState.IsValid){
                _context.Add(newAssoc);
                _context.SaveChanges();
                return Redirect($"{newAssoc.ProductId}");
            }
            ViewBag.Product = _context.Products
                .Include(prod => prod.Associations)
                    .ThenInclude(assoc => assoc.Category)
                .FirstOrDefault(prod => prod.ProductId == newAssoc.ProductId);

            ViewBag.Categories = _context.Categories.ToList();

            return View($"product/{newAssoc.ProductId}");
        }


        [HttpGet("category")]
        public IActionResult Category()
        {
            ViewBag.Categories = _context.Categories.ToList();

            return View();
        }

        [HttpPost("category/new")]
        public IActionResult NewCategory(Category newCat)
        {
            if(ModelState.IsValid){
                _context.Add(newCat);
                _context.SaveChanges();
                return RedirectToAction("Category");
            }

            ViewBag.Categories = _context.Categories.ToList();

            return View("Category");

        }

        [HttpGet("category/{categoryId}")]
        public IActionResult OneCategory(int categoryId)
        {
            ViewBag.Category = _context.Categories
                .Include(cat => cat.Associations)
                    .ThenInclude(assoc => assoc.Product)
                .FirstOrDefault(cat => cat.CategoryId == categoryId);

            ViewBag.Products = _context.Products.ToList();
            
            return View();
        }

        [HttpPost("category/add_product")]
        public IActionResult CategoryAddProduct(Association newAssoc)
        {
            if(ModelState.IsValid){
                _context.Add(newAssoc);
                _context.SaveChanges();
                return Redirect($"{newAssoc.CategoryId}");
            }
            ViewBag.Category = _context.Categories
                .Include(cat => cat.Associations)
                    .ThenInclude(assoc => assoc.Product)
                .FirstOrDefault(cat => cat.CategoryId == newAssoc.CategoryId);

            ViewBag.Products = _context.Products.ToList();

            return View($"category/{newAssoc.CategoryId}");
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
