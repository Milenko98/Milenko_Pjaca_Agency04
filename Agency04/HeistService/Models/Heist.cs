using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HeistService.Models
{
    public class Heist
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string StartTime { get; set; }

        public string Location { get; set; }

        public string EndTime { get; set; }

        public ICollection<HeistSkill> HeistsSkills { get; set; }

        public string Status { get; set; }

        public Heist(int id, string name, string location, string startTime, string endTime, ICollection<HeistSkill> heistsSkills, string status)
        {
            Id = id;
            Name = name;
            Location = location;
            StartTime = startTime;
            EndTime = endTime;
            HeistsSkills = heistsSkills;
            Status = status;
        }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public Heist()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}
