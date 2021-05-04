
using Entidades;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HersanProject.Models
{
    public class PersonaInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }
        [Required(ErrorMessage = "El nombre es requerida")]
        public string Nombre { get; set; }
          [Required(ErrorMessage = "El direccion es requerida")]
        public string Direccion { get; set; }
          [Required(ErrorMessage = "El barrio es requerida")]
        public string Barrio { get; set; }
          [Required(ErrorMessage = "El costo es requerida")]
        public decimal Costo { get; set; }

        [EstadoValidacion(ErrorMessage = "El Estado de ser Pago o No Pago")]
        public string Estado { get; set; }
    }

    internal class EstadoValidacion : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((value.ToString().ToUpper() == "P") || (value.ToString().ToUpper() == "N"))
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult(ErrorMessage);
            }
        }

    }

    public class PersonaViewModel : PersonaInputModel
    {
       

        public PersonaViewModel()
        {

        }
        public PersonaViewModel(Persona persona)
        {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
            Direccion = persona.Direccion;
            Barrio = persona.Barrio;
            Costo = persona.Costo;
            Estado = persona.Estado;

        }

    }
}
