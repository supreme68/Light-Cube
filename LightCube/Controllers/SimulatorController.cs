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
        
        public ActionResult Index()
        {
        return View(db);
        } 
        //[HttpPost]

        //public ActionResult Simulator(Resistor db)
        //{
        //return Json(db);
        //}

        public ActionResult ExampleSchema()
        {
        return View();
        }

    }
}