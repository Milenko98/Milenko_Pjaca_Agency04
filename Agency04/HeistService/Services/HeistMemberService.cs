using HeistService.AppSettings;
using HeistService.DTOModels;
using HeistService.Interfaces;
using HeistService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HeistService.Services
{
    public class HeistMemberService : IHeistMember
    {

        private readonly ApplicationDbContext _context;

        public HeistMemberService(ApplicationDbContext context)
        {
            _context = context;
        }


        public int CreateHeistMember(HeistMemberDTO memberDTO)
        {

            List<HeistMember> members = new();
            members = _context.HeistMembers.ToList();

            List<MemberSkill> ms = new();

            foreach (var item in members)
            {
                if(item.Email == memberDTO.Email)
                {
                    return -1;
                }
            }

            if(memberDTO.MembersSkills != null && memberDTO.MembersSkills.Count != 0)
            {
                var duplicates = memberDTO.MembersSkills.GroupBy(a => a.Name).Where(a => a.Count() > 1).Select(x => new { Name = x.Key });
                if(duplicates.Any())
                {
                    return -1;
                }
            }
            
            
            if (memberDTO.MembersSkills != null && memberDTO.MembersSkills.Count != 0)
            {
                foreach (var item in memberDTO.MembersSkills)
                {
                    MemberSkill mss = new(item.Id, item.Name, item.Level,item.HeistMemberId);

                    ms.Add(mss);
                }
                HeistMember member = new(memberDTO.Id, memberDTO.Name, memberDTO.Sex, memberDTO.Email, ms, memberDTO.MainSkill, memberDTO.Status, memberDTO.HeistId);
                _context.HeistMembers.Add(member);
                _context.SaveChanges();
                return 0;
            }
            else
            {
                return -1;
            }
        }

        public bool DeleteMemberSkill(string id, string name)
        {
            List<MemberSkill> skills = new();
            skills = _context.MembersSkills.ToList();

            List<HeistMember> members = new();
            members = _context.HeistMembers.ToList();

            foreach (var item in skills)
            {
                int count = members.Where(x => x.Id == item.HeistMemberId).Count();
                if (count == 0)
                {
                    return false;
                }
                else
                {
                    if (item.Id == Convert.ToInt32(id))
                    {
                        _context.MembersSkills.Remove(item);
                        _context.SaveChanges();
                    }
                }
            }
            return true;
        }

        public List<HeistMember> GetHeistMembers()
        {
            return _context.HeistMembers.ToList();
        }

        public List<MemberSkill> GetMemberSkills(string id)
        {
            return _context.MembersSkills.Where(skill => skill.HeistMemberId == Convert.ToInt32(id)).ToList();
        }

#pragma warning disable CS8766 // Nullability of reference types in return type doesn't match implicitly implemented member (possibly because of nullability attributes).
        public HeistMember? GetMember(string id)
#pragma warning restore CS8766 // Nullability of reference types in return type doesn't match implicitly implemented member (possibly because of nullability attributes).
        {
            var member= _context.HeistMembers.Include("MembersSkills").FirstOrDefault(x=>x.Id == Convert.ToInt32(id));
            if(member == null)
            {
                return null;
            }
            return member;
        }

        public int UpdateMemberSkills(HeistMemberDTO memberDTO, string id)
        {
            int count1 = _context.HeistMembers.Where(x => x.Id == Convert.ToInt32(id)).Count();

            List<MemberSkill> ms = new();

            foreach (var item in memberDTO.MembersSkills)
            {
                MemberSkill mss = new(item.Id, item.Name, item.Level,item.HeistMemberId);

                ms.Add(mss);
            }
            HeistMember member = new(memberDTO.Id, memberDTO.Name, memberDTO.Sex, memberDTO.Email, ms, memberDTO.MainSkill, memberDTO.Status, memberDTO.HeistId);

            if (count1 == 0)
            {
                return -1;
            }
            else
            {
                _context.HeistMembers.Update(member);
                _context.SaveChanges();
                return 0;
            }
        }

        public void AddMemberSkills(List<MemberSkillDTO> skills, string id)
        {
            List<MemberSkill> skillsForDB = new();

            foreach (var item in skills)
            {
                MemberSkill skill = new MemberSkill(item.Id, item.Name, item.Level,Convert.ToInt32(id));
                skillsForDB.Add(skill);
            }

            _context.MembersSkills.AddRange(skillsForDB);
            _context.SaveChanges();
        }
    }
}
