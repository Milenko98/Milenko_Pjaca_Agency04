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
    public class HeistMemberController : ControllerBase
    {
        private readonly IHeistMember _heistMember;
        public HeistMemberController(IHeistMember heistMember)
        {
            _heistMember = heistMember;
        }

        [HttpPost]
        [Route("member")]
        public ActionResult CreateHeistMember(HeistMemberDTO memberDTO)
        {

            int response = _heistMember.CreateHeistMember(memberDTO);
            if (response == -1)
            {
                return BadRequest();
            }
            else
            {
                HttpContext.Response.Headers["Location"] = "HeistMember/member/" + memberDTO.Id;
                return CreatedAtRoute(memberDTO.Id, memberDTO);
            }
        }

        [HttpGet]
        [Route("members")]
        public List<HeistMember> GetHeistmembers()
        {
            return _heistMember.GetHeistMembers();
        }

        [HttpGet("member/{id}/skills")]
        public List<MemberSkill> GetMemberSkills(string id)
        {

            return _heistMember.GetMemberSkills(id);
        }

        [HttpDelete("member/{id}/skills/{name}")]
        public ActionResult DeleteMemberSkill(string id, string name)
        {
            bool response = _heistMember.DeleteMemberSkill(id, name);
            if (response)
            {
                return NoContent();
            }
            return NotFound();
        }

        [HttpPut("member/{id}/skills")]
        public ActionResult UpdateSkill([FromBody] HeistMemberDTO member, string id)
        {
            int response = _heistMember.UpdateMemberSkills(member, id);
            if (response == -1)
            {
                return NotFound();
            }
            HttpContext.Response.Headers["Location"] = "member/" + id + "/skills";
            return NoContent();
        }

        [HttpGet("memberr/{id}")]
        public HeistMember GetHeistMember(string id)
        {
            return _heistMember.GetMember(id);
        }

        [HttpPost("memberr/{id}/skills")]
        public ActionResult AddMemberSkills([FromBody] List<MemberSkillDTO> skills, string id)
        {
            _heistMember.AddMemberSkills(skills, id);
            return NoContent();
        }

    }
}
