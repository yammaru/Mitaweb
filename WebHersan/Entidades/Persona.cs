using System;
using System.ComponentModel.DataAnnotations;


namespace Entidades
{
    public class Persona
    {
    [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Barrio { get; set; }
        public decimal Costo { get; set; }
        public string Estado { get; set; }
    }
}
