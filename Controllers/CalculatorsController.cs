using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Light_Cube.Controllers
{
    public class CalculatorsController : Controller
    {
        public IActionResult ColorCode()
        {
            return View();
        }

        public IActionResult CalculatorSelector()
        {
        return View();
        }

        public IActionResult Ohmwall()
        {
        return View();
        }

        

    }
}