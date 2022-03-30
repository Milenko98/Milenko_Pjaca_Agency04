using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HeistService.Models
{
    public class MemberSkill
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Level { get; set; }

        public int HeistMemberId { get; set; }

        public MemberSkill(int id, string name, string level,int heistMemberId)
        {
            Id = id;
            Name = name;
            Level = level;
            HeistMemberId = heistMemberId;
        }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public MemberSkill()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
