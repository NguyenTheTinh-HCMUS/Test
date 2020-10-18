using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Domains;

namespace WebApplication1.Services
{
    public interface IStudentService
    {
        Task<List<Student>> GetAllStudent_Async();
        Task<bool> CreateStudent_Async(Student student);
        Task<Student> Get_Async(string code);
    }

}
