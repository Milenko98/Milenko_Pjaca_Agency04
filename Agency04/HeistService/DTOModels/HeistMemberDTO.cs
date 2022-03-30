using System;
using System.Collections.Generic;
using System.Text;

namespace HeistService.DTOModels
{
    public class HeistMemberDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Sex { get; set; }

        public string Email { get; set; }

        public ICollection<MemberSkillDTO> MembersSkills { get; set; }

        public string MainSkill { get; set; }

        public string Status { get; set; }

        public int HeistId { get; set; }

        public HeistMemberDTO(int id, string name, string sex, string email, ICollection<MemberSkillDTO> membersSkills, string mainSkill, string status, int heistId)
        {
            Id = id;
            Name = name;
            Sex = sex;
            Email = email;
            MembersSkills = membersSkills;
            MainSkill = mainSkill;
            Status = status;
            HeistId = heistId;
        }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public HeistMemberDTO()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
