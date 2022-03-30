using HeistService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeistService.AppSettings
{
    public class ApplicationDbContext : DbContext
    {
        //EntityFrameworkCore\Add-Migration -Context ApplicationDbContext -OutputDir "Migrations/ApplicationDbContextMigrations"
        //EntityFrameworkCore\Update-Database -Context ApplicationDbContext

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {

        }

        public DbSet<HeistMember> HeistMembers { get; set; }

        public DbSet<Heist> Heists { get; set; }

        public DbSet<MemberSkill> MembersSkills { get; set; }

        public DbSet<HeistSkill> HeistsSkills { get; set; }
    }
}
