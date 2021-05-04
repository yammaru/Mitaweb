using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entidades;

namespace Logica
{
    public class ProductoService
    {   private readonly EstampadosContext _context;
public ProductoService(EstampadosContext context)
{
_context=context;
}
public GuardarProductoResponse Guardar(Producto producto)
        {
            try
            {
                var ProductoBuscar = _context.Productos.Find(producto.IdProducto);

                if (ProductoBuscar != null)
                {
                    return new GuardarProductoResponse("Error la persona ya esta registrada");
                }
                _context.Productos.Add(producto);
                _context.SaveChanges();

                return new GuardarProductoResponse(producto);
            }
            catch (Exception e)
            {
                return new GuardarProductoResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public List<Producto> ConsultarTodos()
        {
            List<Producto> productos = _context.Productos.ToList();

            return productos;
        }
        public string Modificar(Producto ProductoNueva)
        {
            try
            {

                var productoVieja =_context.Productos.Find(ProductoNueva.IdProducto);
                if (productoVieja != null)
                {
                    productoVieja.IdProducto = ProductoNueva.IdProducto;
                    productoVieja.Descripcion = ProductoNueva.Descripcion;
                    productoVieja.Precio = ProductoNueva.Precio;
                    _context.Productos.Update(ProductoNueva);
                    _context.SaveChanges();

                    return ($"El registro {ProductoNueva.IdProducto} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {ProductoNueva.IdProducto} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public string Eliminar(int identificacion)
        {
            try
            {

                var producto = _context.Productos.Find(identificacion);

                if (producto != null)
                {
                    _context.Productos.Remove(producto);
                    _context.SaveChanges();


                    return ($"El registro {producto.IdProducto} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }


        }
        public Producto BuscarxId(int identificacion)
        {
            var producto = _context.Productos.Find(identificacion);

            return producto;
        }


    public class GuardarProductoResponse
    {
        public GuardarProductoResponse(Producto producto)
        {
            Error = false;
            Producto = producto;
        }
        public GuardarProductoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Producto Producto { get; set; }
    }

}
}