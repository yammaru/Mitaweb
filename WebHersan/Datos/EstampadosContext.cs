using System;
using Entidades;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class EstampadosContext : DbContext
    {
        public EstampadosContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Producto> Productos{get;set;}
    }
}
