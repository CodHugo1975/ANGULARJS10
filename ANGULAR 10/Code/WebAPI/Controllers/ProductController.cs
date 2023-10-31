using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ProductController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            //string query = @"
            //        select ProductID, Name, Description, Image from dbo.Product";

            string query = @"
                    SELECT 
		                Product.ProductID as 'ProductID',
		                Product.Name as 'Name',
		                Product.Description as 'Description',
                        Product.Image as 'Image',
		                Category.Name as 'CategoryName'		             
                    FROM Product
                    INNER JOIN ProductCategory
                    ON ProducT.ProductID = ProductCategory.ProductID
                    INNER JOIN Category
                    ON Category.CategoryID = ProductCategory.CategoryID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CatalogAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }


            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Product prod)
        {
            string query = @"insert into dbo.Product values
                            ('" + prod.Name +
                            @"','" + prod.Description +
                            @"','" + prod.Image +
                            @"')

                            declare @newid int
                            SELECT @newid = @@IDENTITY      

                             declare @newcategoryid int
                             select @newcategoryid =  CategoryId 
                                                       from Category 
                             where Name = '" + prod.CategoryName + @"' 

                            insert into dbo.ProductCategory values(
                            @newid,@newcategoryid)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CatalogAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }


            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Product prod)
        {
            string query = @"update dbo.Product set 
                             Name = '" + prod.Name + @"',
                             Description = '" + prod.Description + @"', 
                             Image = '" + prod.Image + @"' 
                             where ProductId = " + prod.ProductID + @"    
                              
                             declare @newcategoryid int
                             select @newcategoryid =  CategoryId 
                                                       from Category 
                             where Name = '" + prod.CategoryName + @"'   

                             update dbo.ProductCategory set 
                             CategoryID = @newcategoryid                                                 
                             where ProductId = " + prod.ProductID + @"
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CatalogAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }


            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                             delete from dbo.ProductCategory                         
                             where ProductID = " + id + @" 
                             delete from dbo.Product                         
                             where ProductID = " + id + @"                      
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CatalogAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }


            }

            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {

            try 
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + @"\Photos\" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.OpenOrCreate)) 
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("genericproduct.png");
            }
        }


        [Route("GetAllCategoryNames")]
        public JsonResult GetAllCategoryNames()
        {

            string query = @"
                    select Name from dbo.Category
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CatalogAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }


            }

            return new JsonResult(table);

        }
    }
}
