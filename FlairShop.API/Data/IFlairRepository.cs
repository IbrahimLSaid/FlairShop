using System.Collections.Generic;
using System.Threading.Tasks;
using FlairShop.API.Models;

namespace FlairShop.API.Data
{
    public interface IFlairRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);

        Task<IEnumerable<Order>> GetOrders(int userId);
        Task<Order> GetOrder(int id);

        Task<IEnumerable<Vendor>> GetVendors();
        Task<Vendor> GetVendor(int id);

        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProduct(int id);

        Task<IEnumerable<Product>> GetVendorProducts(int partnerId);
    }
}