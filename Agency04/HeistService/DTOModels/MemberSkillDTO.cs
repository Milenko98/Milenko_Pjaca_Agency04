using System;
using System.Collections.Generic;
using System.Text;

namespace HeistService.DTOModels
{
   public class MemberSkillDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Level { get; set; }

        public int HeistMemberId { get; set; }

        public MemberSkillDTO(int id, string name, string level,int heistMemberId)
        {
            Id = id;
            Name = name;
            Level = level;
            HeistMemberId = heistMemberId;
        }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public MemberSkillDTO()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
