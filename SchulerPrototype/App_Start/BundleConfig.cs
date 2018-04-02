using System.Web;
using System.Web.Optimization;

namespace SchulerPrototype
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/datatables").Include(
                        "~/Content/DataTables/jquery.dataTables.js",
                        "~/Content/DataTables/datatables.bootstrap.js",
                        "~/Content/DataTables/dataTables.buttons.min.js",
                        "~/Content/DataTables/buttons.bootstrap.min.js",
                        "~/Content/DataTables/buttons.html5.min.js",
                        "~/Content/DataTables/buttons.print.min.js",
                        "~/Content/DataTables/dataTables.fixedColumns.min.js",
                        "~/Content/DataTables/dataTables.fixedHeader.min.js",
                        "~/Content/DataTables/dataTables.keyTable.min.js",
                        "~/Content/DataTables/dataTables.scroller.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/teacherjs").Include(
                      "~/Scripts/js/Teacher/tclassattendance.js",
                      "~/Scripts/js/Teacher/tclassprog.js",
                      "~/Scripts/js/Teacher/tclasssched.js",
                      "~/Scripts/js/Teacher/teacherlv.js",
                      "~/Scripts/js/Teacher/dashboard.js",
                      "~/Scripts/js/Teacher/teachermngt.js",
                      "~/Scripts/js/Teacher/tlessonplan.js",
                      "~/Scripts/js/Teacher/tstudentgrades.js",
                      "~/Scripts/js/Teacher/tstudgradeschool.js",
                      "~/Scripts/js/Teacher/tstudprog.js",
                      "~/Scripts/js/Teacher/tstudgradesdeped.js"));

            bundles.Add(new ScriptBundle("~/bundles/securityjs").Include(
                      "~/Content/js/Security/dashboard.js",
                      "~/Content/js/Security/noidhistory.js",
                      "~/Content/js/Security/noidlist.js",
                      "~/Content/js/Security/visitorhistory.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/style.css"));

            bundles.Add(new StyleBundle("~/Content/datatables").Include(
                      "~/Content/CSSDataTables/dataTables.bootstrap.min.css"));
        }
    }
}
