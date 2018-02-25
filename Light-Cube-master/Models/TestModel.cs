using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Light_Cube.Models
{
    public class TestModel
    {
        [Required(ErrorMessage = "This is Field required")]
        [StringLength(100, ErrorMessage = "This field cant be more than 100 charter")]
        public string Text { get; set; }
        [Required(ErrorMessage = "This is Field required")]
        [StringLength(100, ErrorMessage = "This field cant be more than 100 charter")]
        public string Value { get; set;}

    }
}
