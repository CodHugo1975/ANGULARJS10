using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Product
    {

        public int ProductID { get; set; }

        public string Name { get; set; }


        public string Description { get; set; }


        public string Image { get; set; }

        public int CategoryID { get; set; }

        public string CategoryName { get; set; }

    }
}
