using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LoginAndRegWithDb.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace LoginAndRegWithDb.Controllers
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
            HttpContext.Session.Clear();
            return View("Index");
        }

        [HttpPost("check/reg")]
        public IActionResult Reg(User user)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(u => u.Email == user.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("Index");
                }
                else
                {

                    PasswordHasher<User> hasher = new PasswordHasher<User>();

                    user.Password = hasher.HashPassword(user, user.Password);

                    _context.Add(user);
                    _context.SaveChanges();

                    HttpContext.Session.SetInt32("UserId", user.UserId);

                    return RedirectToAction("Success");
                }
            }
            else
            {
                return View("Index");
            }
        }

        [HttpPost("check/login")]
        public IActionResult Login(LogUser logUser)
        {
            if(ModelState.IsValid)
            {
                User user = _context.Users
                    .FirstOrDefault(u => u.Email == logUser.LogEmail);
                if(user == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Index");
                }
                
                PasswordHasher<LogUser> hasher = new PasswordHasher<LogUser>();
                var result = hasher.VerifyHashedPassword(logUser, user.Password, logUser.LogPassword);

                if(result == 0){
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Index");
                }

                HttpContext.Session.SetInt32("UserId", user.UserId);
                return RedirectToAction("Success");
                
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("success")]
        public IActionResult Success(){

            if(HttpContext.Session.GetInt32("UserId") != null){
                return View("Success");
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        [HttpGet("logout")]
        public IActionResult Logout(){

            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
