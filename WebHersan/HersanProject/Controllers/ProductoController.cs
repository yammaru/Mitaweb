
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidades;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using yamm.Models;

namespace yamm.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class ProductoController:ControllerBase
{

private readonly ProductoService _productoService;
public ProductoController(EstampadosContext context){
    _productoService=new ProductoService(context);
    }
 // GET: api/Producto
        [HttpGet]
        public IEnumerable<ProductoViewModel> Gets()
        {
            var productos = _productoService.ConsultarTodos().Select(p => new ProductoViewModel(p));
            return productos;
        }
        // GET: api/Producto/5
        [HttpGet("{identificacion}")]
        public ActionResult<ProductoViewModel> Get(int identificacion)
        {
            var producto = _productoService.BuscarxId(identificacion);
            if (producto == null) return NotFound();
            var productoViewModel = new ProductoViewModel(producto);
            return productoViewModel;
        }
        private Producto MapearProducto(ProductoInputModel productoInput)
        {
            var producto = new Producto
            {
                IdProducto = productoInput.Idproducto,
                Descripcion = productoInput.Descripcion,
                Precio=productoInput.Precio


            };
            return producto;
        
        }
        // POST: api/Galeria
        [HttpPost]
        public ActionResult<ProductoViewModel> Post(ProductoInputModel ProductoInput)
        {
            Producto producto = MapearProducto(ProductoInput);
            var response = _productoService.Guardar(producto);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar Producto", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Producto);
        }
        // DELETE: api/Producto/5
        [HttpDelete("{identificacion}")]
        public ActionResult<string> Delete(int identificacion)
        {
            string mensaje = _productoService.Eliminar(identificacion);
            return Ok(mensaje);
        }

    }
}
