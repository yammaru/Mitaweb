using System;
using System.Collections.Generic;
using System.Linq;

using Datos;
using Entidades;

namespace Logica
{
    public class PersonaService
    {
        private readonly EstampadosContext _context;
        public PersonaService(EstampadosContext context)
        {
            _context = context;
        }
        
        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
                var personaBuscada = _context.Personas.Find(persona.Identificacion);

                if (personaBuscada != null)
                {
                    return new GuardarPersonaResponse("Error la persona ya esta registrada");
                }
               
                _context.Personas.Add(persona);
                _context.SaveChanges();

                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)
            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public List<Persona> ConsultarTodos()
        {
            List<Persona> personas = _context.Personas.ToList();

            return personas;
        }
        public string Modificar(Persona personaNueva)
        {
            try
            {

                var personaVieja =_context.Personas.Find(personaNueva.Identificacion);
                if (personaVieja != null)
                {
                    personaVieja.Nombre = personaNueva.Nombre;
                    personaVieja.Identificacion = personaNueva.Identificacion;
                    personaVieja.Direccion = personaNueva.Direccion;
                    personaVieja.Barrio = personaNueva.Barrio;
                    personaVieja.Costo=personaNueva.Costo;
                    personaVieja.Estado=personaNueva.Estado;
                    _context.Personas.Update(personaNueva);
                    _context.SaveChanges();

                    return ($"El registro {personaNueva.Nombre} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {personaNueva.Identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public string Eliminar(string identificacion)
        {
            try
            {

                var persona = _context.Personas.Find(identificacion);

                if (persona != null)
                {
                    _context.Personas.Remove(persona);
                    _context.SaveChanges();


                    return ($"El registro {persona.Nombre} se ha eliminado satisfactoriamente.");
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
        public Persona BuscarxIdentificacion(string identificacion)
        {
            var persona = _context.Personas.Find(identificacion);

            return persona;
        }
        public int Totalizar()
        {
            return _context.Personas.Count();
        }
        public int TotalizarPagado()
        {
            return _context.Personas.Count(p => p.Estado == "Pagado");
        }
        public int TotalizarDebe()
        {
            return _context.Personas.Count(p => p.Estado == "Debe");
        }
    }

    public class GuardarPersonaResponse
    {
        public GuardarPersonaResponse(Persona persona)
        {
            Error = false;
            Persona = persona;
        }
        public GuardarPersonaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Persona Persona { get; set; }
    }

}
