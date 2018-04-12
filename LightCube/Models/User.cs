//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightCube.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    public partial class User
    {
        public int UserID { get; set; }
        [Required]
        [StringLength(40)]
        //[Display(Name = "Email:")]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        //[Display(Name = "User Name:")]
        public string UserName { get; set; }
        [Required]
        [StringLength(150, MinimumLength = 6)]
        public int Password { get; set; }
        public int PasswordSalt { get; set; }
    }
}