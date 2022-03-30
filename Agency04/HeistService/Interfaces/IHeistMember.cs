using HeistService.DTOModels;
using HeistService.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HeistService.Interfaces
{
    public interface IHeistMember
    {
        List<HeistMember> GetHeistMembers();
        int CreateHeistMember(HeistMemberDTO member);
        int UpdateMemberSkills(HeistMemberDTO member, string id);
        List<MemberSkill> GetMemberSkills(string id);
        bool DeleteMemberSkill(string id, string name);
        HeistMember GetMember(string id);
        void AddMemberSkills(List<MemberSkillDTO> memberSkills, string id);
    }
}
