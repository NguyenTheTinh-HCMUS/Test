using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Attributes;

namespace WebApplication1.Contracts.V1.requests
{
    public class StudentRequest
    {
        [Required(ErrorMessage = "Code is required")]
        public string Code { get; set; }
        [Required(ErrorMessage = "FullName is required")]
        public string FullName { get; set; }
        public string Address { get; set; }
        [IsValidBirth]
        public int Years { get; set; }
    }
}
