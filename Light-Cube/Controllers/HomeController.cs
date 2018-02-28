using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Light_Cube.Models;

namespace Light_Cube.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult ComingSoon()
        {
        return View();
        }

        public IActionResult Home()
        {
        return View();
        }

    }
}
