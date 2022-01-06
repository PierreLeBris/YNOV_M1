using System;
using System.Collections.Generic;
using System.Text;

namespace Archi.Library.Models
{
    public abstract class BaseModel
    {
        public class Pizza
        {
            //public int ID { get; set; }
            //[StringLength(30)]
            public string Name { get; set; }
            [Required]
            public decimal Price { get; set; }
            public string Topping { get; set; }
        }
    }
}
