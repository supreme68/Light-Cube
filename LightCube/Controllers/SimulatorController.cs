using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LightCube.Models;
using System.Data.SqlTypes;

namespace LightCube.Controllers
{
    public class SimulatorController : Controller
    {

        private elementsDBEntities db = new elementsDBEntities();
        // GET: Simulator
        public ActionResult SimulatorCustom()
        {

        return View(db.Resistors);

        } 

        public ActionResult SimulatorReady()
        {
        return View();
        }

    }
}