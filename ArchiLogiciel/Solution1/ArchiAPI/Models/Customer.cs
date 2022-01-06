using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Archi.Api.Models
{
    //[Table("Client")]
    public class Customer
    {
        //[Key]
        public int ID { get; set; }
        [StringLength(30)]
        public string Lastname { get; set; }
        //[Column("Prenom")]
        public string Firstname { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
