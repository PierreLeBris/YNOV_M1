using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Archi.Api.Models
{
    public class Pizza
    {
        public int ID { get; set; }
        [StringLength(30)]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string Topping { get; set; }
    }
}
