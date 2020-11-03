using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlairShop.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FlairShop.API.Data
{
    public class FlairRepository : IFlairRepository
    {
        private readonly DataContext _context;
        public FlairRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Orders).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();

            return users;
        }

        public async Task<IEnumerable<Order>> GetOrders(int userId)
        {
            var orders = await _context.Orders.Where(p => p.UserId == userId).ToListAsync();

            return orders;
        }
        public async Task<Order> GetOrder(int id)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(p => p.OrderId == id);

            return order;
        }

        public async Task<IEnumerable<Vendor>> GetVendors()
        {
            var vendors = await _context.Vendors.ToListAsync();

            return vendors;
        }

        public async Task<Vendor> GetVendor(int id)
        {
            var vendor = await _context.Vendors.Include(p => p.Products).FirstOrDefaultAsync(p => p.Id == id);

            return vendor;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return products;
        }
        public async Task<IEnumerable<Product>> GetVendorProducts(int vendorId)
        {
            var vendorProducts = await _context.Products.Where(p => p.VendorId == vendorId).ToListAsync();
            return vendorProducts;
        }

        public async Task<Product> GetProduct(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);

            return product;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}