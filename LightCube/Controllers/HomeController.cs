using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LightCube.Controllers {
    public class HomeController : Controller {
        public ActionResult ComingSoon()
        {
        return View();
        }

        public ActionResult Home()
        {
        return View();
        }
    }
}