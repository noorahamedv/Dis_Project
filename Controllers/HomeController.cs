using System.Diagnostics;
using _2.Models;
using Microsoft.AspNetCore.Mvc;

namespace _2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult aboutus()
        {
            return View();
        }
        public IActionResult Attractions()
        {
            return View();
        }
        public IActionResult Reviews()
        {
            return View();
        }
        public IActionResult Statistics()
        {
            return View();
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
