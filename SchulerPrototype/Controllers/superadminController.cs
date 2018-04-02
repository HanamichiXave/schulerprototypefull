using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchulerPrototype.Controllers
{
    public class superadminController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Security()
        {
            return View("~/Views/Security/in_out.cshtml");
        }

        public ActionResult Teacher()
        {

            return View("~/Views/Teacher/class_attendance.cshtml");
        }
    }
}