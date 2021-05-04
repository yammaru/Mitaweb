using Datos;
using Entidades;
using System.Linq;

namespace Logica
{
    public class UserService
    {
        private readonly EstampadosContext _context;

        public UserService(EstampadosContext context)=> _context = context;

        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password&& t.Estado == "AC");
        }
    }
}
