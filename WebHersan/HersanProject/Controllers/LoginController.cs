using System.Collections.Generic;
using System.Linq;
using Datos;
using Entidades;
using Hersanproject.Config;
using HersanProject.Models;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace HersanProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
public class  LoginController : ControllerBase
{
    EstampadosContext _context;
    UserService _userService;
    JwtService _jwtService;
   public LoginController(EstampadosContext context, IOptions<AppSetting> appSettings){
	_context = context;
	 var admin = _context.Users.Find("admin");
      if (admin == null) 
      {
		_context.Users.Add(new User() 
           { 
		         UserName="admin", 
			    Password="admin", 
	               Email="admin@gmail.com", 
                    Estado="AC", 
                    FirstName="Adminitrador", 
                    LastName="", 
                    MobilePhone="31800000000"}
		);
		var registrosGuardados=_context.SaveChanges();
	}
	_userService = new UserService(context);
	_jwtService = new JwtService(appSettings);
      }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(LoginInputModel model)
        {
            var user = _userService.Validate(model.Username, model.Password);
            if (user == null) return BadRequest("Username or password is incorrect");
            var response= _jwtService.GenerateToken(user);
            return Ok(response);
        }
   }
}
