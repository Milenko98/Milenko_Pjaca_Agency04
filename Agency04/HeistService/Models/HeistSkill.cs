using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HeistService.Models
{
    public class HeistSkill
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Level { get; set; }

        public int Members { get; set; }

        public int HeistId { get; set; }

        public HeistSkill(int id, string name, string level, int members,int heistId)
        {
            Id = id;
            Name = name;
            Level = level;
            Members = members;
            HeistId = heistId;
        }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public HeistSkill()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
