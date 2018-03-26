using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Light_Cube.Models;

namespace Light_Cube.Controllers
{
    public class ToolsController : Controller
    {


        public IActionResult ToolsSelector()
        {
        return View();
        }

        public IActionResult SimulatorCustom()
        {
        return View();
        }

        public IActionResult SimulatorReady()
        {
        return View();
        }

        [HttpPost]
        public IActionResult Test(int StripValue)
        {
        int value1 = StripValue;

        string returnvalue = "My value come :" + value1;

        return Json(returnvalue);
        }

        public IActionResult ColorCode()
        {
        List<TestModel> data = new List<TestModel>();
        TestModel data1 = new TestModel();
        data1.Text = "Numan";
        data1.Value = "28";

        TestModel data2 = new TestModel() { Value = "17", Text = "Dimitar" };

        data.Insert(0, data1);
        data.Insert(1, data2);

        return View(data);
        }


    }


}
