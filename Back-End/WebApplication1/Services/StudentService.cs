using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Domains;

namespace WebApplication1.Services
{
    public class StudentService : IStudentService
    {
        #region create property
        private readonly DataContext _datacontext;
        #endregion
        #region Constructors

        public StudentService(DataContext dataContext)
        {
            _datacontext = dataContext;
        }

        #endregion
        #region Implement from IStudentService
        public async Task<bool> CreateStudent_Async(Student student)
        {
            Console.WriteLine(student);
            await _datacontext.Students.AddAsync(student);
            return (await _datacontext.SaveChangesAsync()) > 0;
        }

        public async  Task<Student> Get_Async(string code)
        {
            return await _datacontext.Students.SingleOrDefaultAsync(x => x.Code == code);
        }

        async Task<List<Student>> IStudentService.GetAllStudent_Async()
        {
            return await _datacontext.Students.ToListAsync();
        }

        #endregion

    }
}
