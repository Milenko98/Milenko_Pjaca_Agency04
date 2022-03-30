using HeistService.DTOModels;
using HeistService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeistService.Interfaces
{
    public interface IHeist
    {
        int CreateHeist(HeistDTO heist);
        List<Heist> GetHeists();
        List<HeistSkill> GetHeistSkills(string id);
        Heist GetHeistById(string id);
        int UpdateHeistSkills(HeistDTO heist, string id);
        void AddHeistSkills(List<HeistSkillDTO> heistSkills, string id);
    }
}
