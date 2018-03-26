using System;
using System.Collections.Generic;

namespace Light_Cube.Models
{
    public partial class Leds
    {
        public int LedId { get; set; }
        public int Voltage { get; set; }
        public int Ampers { get; set; }
        public string Information { get; set; }
    }
}
