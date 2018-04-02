using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchulerPrototype.Controllers
{
    public class TeacherController : Controller
    {
        // GET: Teacher
        public ActionResult class_attendance()
        {
            return View();
        }
    }
}