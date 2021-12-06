using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                List<Student> ls = StudentsDBMOCK.students;
                return Ok(ls);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student s2Send = StudentsDBMOCK.students.FirstOrDefault(stu => stu.Id == id);
                if (s2Send == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id={id} was not found to get");
                }
                return Ok(s2Send);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Post([FromBody] Student newStudent)
        {
            try
            {
                StudentsDBMOCK.students.Add(newStudent);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + newStudent.Id), newStudent);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student s2Delete = StudentsDBMOCK.students.FirstOrDefault(stu => stu.Id == id);
                if (s2Delete != null)
                {
                    StudentsDBMOCK.students.Remove(s2Delete);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, $"student with id={id} was not found for deleting!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value2Update)
        {
            try
            {
                Student s2Update = StudentsDBMOCK.students.FirstOrDefault(stu => stu.Id == id);
                if (s2Update != null)
                {
                    s2Update.Name = value2Update.Name;
                    s2Update.Grade = value2Update.Grade;
                    return Ok(s2Update);
                }
                return Content(HttpStatusCode.NotFound, $"student with id={id} was not found for updating!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
