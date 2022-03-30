using HeistService.AppSettings;
using HeistService.DTOModels;
using HeistService.Interfaces;
using HeistService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeistService.Services
{
    public class HeistsService : IHeist
    {

        private readonly ApplicationDbContext _context;

        public HeistsService(ApplicationDbContext context)
        {
            _context = context;
        }

        public int CreateHeist(HeistDTO heistDTO)
        {
            List<Heist> members = new();
            members = _context.Heists.ToList();

            List<HeistSkill> ms = new();

            foreach (var item in members)
            {
                if (item.Name == heistDTO.Name)
                {
                    return -1;
                }
            }

            if (heistDTO.HeistsSkills != null && heistDTO.HeistsSkills.Count != 0)
            {
                var duplicatesName = heistDTO.HeistsSkills.GroupBy(a => a.Name).Where(a => a.Count() > 1).Select(x => new { Name = x.Key });
                if (duplicatesName.Any())
                {
                    return -1;
                }
            }


            if (heistDTO.HeistsSkills != null && heistDTO.HeistsSkills.Count != 0)
            {
                foreach (var item in heistDTO.HeistsSkills)
                {
                    HeistSkill mss = new(item.Id, item.Name, item.Level, item.Members,item.HeistId);

                    ms.Add(mss);
                }
                Heist heist = new(heistDTO.Id, heistDTO.Name, heistDTO.Location, heistDTO.StartTime, heistDTO.EndTime, ms, heistDTO.Status);
                _context.Heists.Add(heist);
                _context.SaveChanges();
                return 0;
            }
            else
            {
                return -1;
            }
        }

        public List<Heist> GetHeists()
        {
            return _context.Heists.ToList();
        }

        public List<HeistSkill> GetHeistSkills(string id)
        {
            return _context.HeistsSkills.Where(skill => skill.HeistId == Convert.ToInt32(id)).ToList();
        }

        public Heist GetHeistById(string id)
        {
            var member = _context.Heists.Include("HeistsSkills").FirstOrDefault(x => x.Id == Convert.ToInt32(id));
            if (member == null)
            {
#pragma warning disable CS8603 // Possible null reference return.
                return null;
#pragma warning restore CS8603 // Possible null reference return.
            }
            return member;
        }

        public int UpdateHeistSkills(HeistDTO heistDTO, string id)
        {

            List<Heist> heists = new();
            heists = _context.Heists.ToList();

            foreach(var item in heists)
            {
                if(item.Id == Convert.ToInt32(id) && item.Status.ToLower() == "in_progress")
                {
                    return -3;
                }
            }
            int count1 = _context.Heists.Where(x => x.Id == Convert.ToInt32(id)).Count();

            List<HeistSkill> ms = new();

            foreach (var item in heistDTO.HeistsSkills)
            {
                HeistSkill mss = new(item.Id, item.Name, item.Level, item.Members,item.HeistId);

                ms.Add(mss);
            }
            Heist heist = new(heistDTO.Id, heistDTO.Name, heistDTO.Location, heistDTO.StartTime, heistDTO.EndTime, ms, heistDTO.Status);

            if (count1 == 0)
            {
                return -2;
            }
            else if (heistDTO.HeistsSkills != null && heistDTO.HeistsSkills.Count != 0)
            {

                var duplicatesName = heistDTO.HeistsSkills.GroupBy(a => a.Name).Where(a => a.Count() > 1).Select(x => new { Name = x.Key });
                if (duplicatesName.Any())
                {
                    return -1;
                }
                else
                {
                    _context.Heists.Update(heist);
                    _context.SaveChanges();
                }
            }
            return 0;
        }

        public void AddHeistSkills(List<HeistSkillDTO> skills, string id)
        {
            List<HeistSkill> skillsForDB = new();

            foreach (var item in skills)
            {
                HeistSkill skill = new(item.Id, item.Name, item.Level,item.Members,Convert.ToInt32(id));
                skillsForDB.Add(skill);
            }

            _context.HeistsSkills.AddRange(skillsForDB);
            _context.SaveChanges();
        }
    }
}
