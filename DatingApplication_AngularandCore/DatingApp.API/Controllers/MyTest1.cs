using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyTest1: ControllerBase
    {
        // GET api/mytest1
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "علی", "نصری", "نظیف" };
        }
    }
}