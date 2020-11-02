using System.Collections.Generic;

namespace FlairShop.API.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EstateAddress { get; set; }
        public int PhoneNumber { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}