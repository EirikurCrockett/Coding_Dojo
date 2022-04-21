using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Womens"))
                .OrderBy(l => l.Name)
                .ToList();
            
            ViewBag.HockeyLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Hockey"))
                .OrderBy(l => l.Sport)
                .ToList();

            ViewBag.NonFootballLeagues = _context.Leagues
                .Where(l => l.Sport != "Football")
                .OrderBy(l => l.Name)
                .ToList();

            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Conference"))
                .OrderBy(l => l.Name)
                .ToList();

            ViewBag.AtlanticLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Atlantic"))
                .OrderBy(l => l.Name)
                .ToList();

            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Conference"))
                .OrderBy(l => l.Name)
                .ToList();

            ViewBag.DallasTeams = _context.Teams
                .Where(t => t.Location == "Dallas")
                .OrderBy(t => t.TeamName)
                .ToList();

            ViewBag.RaptorsTeams = _context.Teams
                .Where(t => t.TeamName == "Raptors")
                .OrderBy(t => t.Location)
                .ToList();

            ViewBag.CityTeams = _context.Teams
                .Where(t => t.Location.Contains("City"))
                .OrderBy(t => t.Location)
                .ToList();

            ViewBag.TNameTeams = _context.Teams.ToList()
                .Where(t => t.TeamName[0] == 'T')
                .OrderBy(t => t.TeamName)
                .ToList();

            ViewBag.TeamsAplhaBeta = _context.Teams
                .OrderBy(t => t.TeamName)
                .ToList();
            
            ViewBag.LNameCooperPlayers = _context.Players
                .Where(p => p.LastName == "Cooper")
                .OrderBy(p =>p.FirstName)
                .ToList();

            ViewBag.FNameJoshuaPlayers = _context.Players
                .Where(p => p.FirstName == "Joshua")
                .OrderBy(p =>p.LastName)
                .ToList();

            ViewBag.NotJoshButCooperPlayers = _context.Players
                .Where(p => p.FirstName != "Joshua" && p.LastName == "Cooper")
                .OrderBy(p =>p.LastName)
                .ToList();
            

            ViewBag.FNameAlexAndWyattPlayers = _context.Players
                .Where(p => p.FirstName == "Alexander" || p.FirstName == "Wyatt")
                .OrderBy(p =>p.FirstName)
                .ToList();



            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}