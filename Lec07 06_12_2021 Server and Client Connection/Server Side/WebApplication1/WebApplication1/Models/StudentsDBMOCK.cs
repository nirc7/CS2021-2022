using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class StudentsDBMOCK
    {
        static public List<Student> students = new List<Student>()
        {
            new Student(){Id=1, Name="avi", Grade=100 },
            new Student() { Id = 2, Name = "charlie", Grade = 97 },
            new Student(){Id=3, Name="benny", Grade=98 },
            new Student(){Id=4, Name="dora", Grade=99 }
        };
    }
}