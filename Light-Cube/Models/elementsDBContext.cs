using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Light_Cube.Models
{
    public partial class elementsDBContext : DbContext
    {
        public virtual DbSet<Batteries> Batteries { get; set; }
        public virtual DbSet<Leds> Leds { get; set; }
        public virtual DbSet<Resistors> Resistors { get; set; }


        public elementsDBContext(DbContextOptions<elementsDBContext> options)
    : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Batteries>(entity =>
            {
                entity.Property(e => e.BatteriesId).HasColumnName("BatteriesID");

                entity.Property(e => e.Information)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Leds>(entity =>
            {
                entity.HasKey(e => e.LedId);

                entity.ToTable("LEDs");

                entity.Property(e => e.LedId).HasColumnName("LedID");

                entity.Property(e => e.Information)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Resistors>(entity =>
            {
                entity.Property(e => e.ResistorsId).HasColumnName("ResistorsID");

                entity.Property(e => e.Information)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
