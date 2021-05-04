using System;
using System.ComponentModel.DataAnnotations;
using Entidades;
namespace yamm.Models
{

public class ProductoInputModel
    {
        [Required(ErrorMessage = "La Nombre de usuario es requerida")]
        public int Idproducto{ get; set; }
        [Required(ErrorMessage = "la imagen es requerida")]
        public string Descripcion { get; set; }
        [Required(ErrorMessage = "el precio es requerida")]
        public decimal Precio { get; set; }
    }


    public class ProductoViewModel : ProductoInputModel
    {
        public ProductoViewModel()
        {

        }
        public ProductoViewModel(Producto producto)
        {
            Idproducto = producto.IdProducto;
            Descripcion = producto.Descripcion ;
            Precio=producto.Precio;
        }
        
    }
}
