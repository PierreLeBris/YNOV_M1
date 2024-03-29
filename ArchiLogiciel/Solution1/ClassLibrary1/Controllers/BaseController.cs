﻿using Archi.Library.Data;
using Archi.Library.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Archi.Library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<TContext, TModel> : ControllerBase where TContext : BaseDbContext where TModel : BaseModel
    {
        protected readonly TContext _context;
        public BaseController(TContext context)
        {
            _context = context;
        }
        // GET: api/[controller]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TModel>>> GetAll()
        {
            return await _context.Set<TModel>().Where(x => x.Active == true).ToListAsync();
        }

        // GET: api/[controller]
        [HttpGet("{id}")]
        public async Task<ActionResult<TModel>> GetBuIdr(int id)
        {
            var controller = await _context.Set<TModel>().SingleOrDefaultAsync(x => x.ID == id && x.Active);
            if (controller == null)
            {
                return NotFound();
            }
            return controller;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, TModel model)
        {
            if (id != model.ID)
            {
                return BadRequest();
            }

            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/[controller]
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TModel>> PostItem(TModel model)
        {
            _context.Set<TModel>().Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetId", new { id = model.ID }, model);
        }

        // DELETE: api/[controller]
        [HttpDelete("{id}")]
        public async Task<ActionResult<TModel>> DeleteItem(int id)
        {
            var item = await _context.Set<TModel>().FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Set<TModel>().Remove(item);
            await _context.SaveChangesAsync();

            return item;
        }

        private bool ModelExists(int id)
        {
            return _context.Set<TModel>().Any(e => e.ID == id);
        }
    }
}
