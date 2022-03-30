using HeistService.DTOModels;
using HeistService.Interfaces;
using HeistService.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeistWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class HeistController : ControllerBase
    {
        private readonly IHeist _heist;
        public HeistController(IHeist heist)
        {
            _heist = heist;
        }

        [HttpPost]
        [Route("heist")]
        public ActionResult CreateHeist(HeistDTO heistDTO)
        {

            int response = _heist.CreateHeist(heistDTO);
            if (response == -1)
            {
                return BadRequest();
            }
            else
            {
                HttpContext.Response.Headers["Location"] = "Heist/heist/" + heistDTO.Id;
                return CreatedAtRoute(heistDTO.Id, heistDTO);
            }
        }


        [HttpGet]
        [Route("heists")]
        public List<Heist> GetHeist()
        {
            var heists= _heist.GetHeists();
            return heists;
        }

        [HttpGet("heist/{id}/skills")]
        public List<HeistSkill> GetMemberSkills(string id)
        {

            return _heist.GetHeistSkills(id);
        }

        [HttpGet("heistt/{id}")]
        public Heist GetHeistById(string id)
        {
            return _heist.GetHeistById(id);
        }


        [HttpPatch("heist/{id}/skills")]
        public ActionResult UpdateSkill([FromBody] HeistDTO heist, string id)
        {
            int response = _heist.UpdateHeistSkills(heist, id);
            if (response == -1)
            {
                return BadRequest();
            }
            else if(response == -2)
            {
                return NotFound(id);
            }
            else if(response == -3)
            {
                return StatusCode(405);
            }
            HttpContext.Response.Headers["Location"] = "heist/" + id + "/skills";
            return NoContent();
        }

        [HttpPost("heistt/{id}/skills")]
        public ActionResult AddHeistSkills([FromBody] List<HeistSkillDTO> skills, string id)
        {
            _heist.AddHeistSkills(skills, id);
            return NoContent();
        }
    }
}
