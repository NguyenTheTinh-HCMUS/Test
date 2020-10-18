using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Contracts.V1;
using WebApplication1.Contracts.V1.requests;
using WebApplication1.Contracts.V1.Responses;
using WebApplication1.Domains;
using WebApplication1.Services;

namespace WebApplication1.Controllers.V1
{
    public class StudentController:Controller
    {
        #region Properties
        private readonly IStudentService _studentService;
        #endregion

        #region Constructors
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        #endregion
        #region Functions
        private AuthFailedResponse ValidFildeFormBody()
        {
            return new AuthFailedResponse
            {
                Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage))
            };
        }
        #endregion
        #region API
        [HttpGet(ApiRoutes.Students.Get)]
        public async Task<IActionResult> Get([FromRoute] string code)
        {
            var rs = await _studentService.Get_Async(code);
            if ( rs== null)
            {
                return BadRequest();

            }
            return Ok(rs);
        }

        [HttpGet(ApiRoutes.Students.GetAll)]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _studentService.GetAllStudent_Async());
        }
        [HttpPost(ApiRoutes.Students.create)]
        public async Task<IActionResult> Create([FromBody] StudentRequest studentRequest)
        {
          
            if (!ModelState.IsValid)
            {
                return BadRequest(ValidFildeFormBody());
            }
            var student = new Student
            {
                Code = studentRequest.Code,
                Address = studentRequest.Address,
                FullName = studentRequest.FullName,
                Years = studentRequest.Years
            };
            if(! await _studentService.CreateStudent_Async(student))
            {
                return BadRequest(new AuthFailedResponse
                {

                    Errors = new List<string> { "This Code is existed"}
                });

            }
            var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            var locationUri = baseUrl + "/" + ApiRoutes.Students.Get.Replace("{code}", student.Code);


            return Created(locationUri,student);

        }
        #endregion



    }
}
