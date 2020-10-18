using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Attributes
{
    public class IsValidBirth: ValidationAttribute
    {
        public IsValidBirth()
            : base("Year must has 4 numbers")
        {
            
        }
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var rs = Int32.TryParse(value.ToString(),out int valueParse);
            if (rs && valueParse>=1000)
            {
                return ValidationResult.Success;
            }
          
            return new ValidationResult("Year must has 4 numbers");
        }
    }
}
