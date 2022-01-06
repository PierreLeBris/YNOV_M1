using Archi.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Archi.Api.Data
{
    public class ArchiDbContext: DbContext
    {
        public ArchiDbContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
