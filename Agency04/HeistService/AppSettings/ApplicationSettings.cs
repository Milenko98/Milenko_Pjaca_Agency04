using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeistService.Models
{

    public class ApplicationSettings
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public string Client_URL { get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    }
}
