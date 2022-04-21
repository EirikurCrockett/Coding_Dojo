#pragma checksum "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8811288fae99de2ceac3dd659b63cac24e6768a4"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Chefs), @"mvc.1.0.view", @"/Views/Home/Chefs.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\_ViewImports.cshtml"
using ChefsNDishes;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\_ViewImports.cshtml"
using ChefsNDishes.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8811288fae99de2ceac3dd659b63cac24e6768a4", @"/Views/Home/Chefs.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8e3683dbd783bea45b88d0b0d3ee52e8ec1e5d61", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Chefs : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
  
    ViewData["Title"] = "Chefs";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""w-75 my-0 mx-auto"">
    <h1>Chefs</h1>
    <table class=""table"">
        <thead class=""thead-dark"">
            <tr>
                <th scope=""col"">Name</th>
                <th scope=""col"">Age</th>
                <th scope=""col""># of Dishes</th>
            </tr>
        </thead>
");
#nullable restore
#line 15 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
         foreach (Chef chef in @ViewBag.Chefs)
        {
            TimeSpan timeDiff = DateTime.Now.Subtract(chef.DoB);
            Double age = Math.Floor(timeDiff.Days/365.25);
            

#line default
#line hidden
#nullable disable
            WriteLiteral("            <tr>\r\n                <td>");
#nullable restore
#line 21 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
               Write(chef.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 21 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
                               Write(chef.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 22 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
               Write(age);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 23 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
               Write(chef.CookBook.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n            </tr>\r\n");
#nullable restore
#line 25 "C:\Users\ecdc5\Desktop\CodingDojo\public\C#\ORM\Entity\ChefsNDishes\Views\Home\Chefs.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral("    </table>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591