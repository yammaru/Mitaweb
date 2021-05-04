using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Entidades
{
    public class Producto
    { [Key]
        public int IdProducto { get; set; }
        public string Descripcion{ get; set; }
        public decimal Precio{get;set;}
        


    }
}
