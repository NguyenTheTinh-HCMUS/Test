using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Contracts.V1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;
        public static class Students
        {
            public const string GetAll = Base + "/students";
            public const string Get = Base + "/students/{code}";
            public const string create = Base + "/students";
        }
    }
}
