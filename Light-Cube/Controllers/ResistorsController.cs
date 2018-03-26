using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Light_Cube.Models;

namespace Light_Cube.Controllers
{
    public class ResistorsController : Controller
    {
        private readonly elementsDBContext _context;

        public ResistorsController(elementsDBContext context)
        {
            _context = context;
        }

        // GET: Resistors
        public async Task<IActionResult> Index()
        {
            return View(await _context.Resistors.ToListAsync());
        }

        // GET: Resistors/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var resistors = await _context.Resistors
                .SingleOrDefaultAsync(m => m.ResistorsId == id);
            if (resistors == null)
            {
                return NotFound();
            }

            return View(resistors);
        }

        // GET: Resistors/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Resistors/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ResistorsId,Ohms,Information")] Resistors resistors)
        {
            if (ModelState.IsValid)
            {
                _context.Add(resistors);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(resistors);
        }

        // GET: Resistors/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var resistors = await _context.Resistors.SingleOrDefaultAsync(m => m.ResistorsId == id);
            if (resistors == null)
            {
                return NotFound();
            }
            return View(resistors);
        }

        // POST: Resistors/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ResistorsId,Ohms,Information")] Resistors resistors)
        {
            if (id != resistors.ResistorsId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(resistors);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ResistorsExists(resistors.ResistorsId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(resistors);
        }

        // GET: Resistors/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var resistors = await _context.Resistors
                .SingleOrDefaultAsync(m => m.ResistorsId == id);
            if (resistors == null)
            {
                return NotFound();
            }

            return View(resistors);
        }

        // POST: Resistors/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var resistors = await _context.Resistors.SingleOrDefaultAsync(m => m.ResistorsId == id);
            _context.Resistors.Remove(resistors);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ResistorsExists(int id)
        {
            return _context.Resistors.Any(e => e.ResistorsId == id);
        }
    }
}
