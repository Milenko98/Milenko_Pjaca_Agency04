using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HeistService.Models
{
    public class HeistMember
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Sex { get; set; }

        public string Email { get; set; }

        public ICollection<MemberSkill> MembersSkills { get; set; }

        public int HeistId { get; set; }

        public string MainSkill { get; set; }

        public string Status { get; set; }

        public HeistMember(int id, string name, string sex, string email, ICollection<MemberSkill> membersSkills, string mainSkill, string status, int heistId)
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
        public HeistMember()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
