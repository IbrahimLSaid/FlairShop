using System.Collections.Generic;

namespace FlairShop.API.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EstateAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string PhotoUrl { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}