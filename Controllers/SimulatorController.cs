using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Light_Cube.Controllers
{
    public class SimulatorController : Controller
    {
        public IActionResult Simulator()
        {
            return View();
        }
    }
}