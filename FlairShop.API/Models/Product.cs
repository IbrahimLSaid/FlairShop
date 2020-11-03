using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlairShop.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Description { get; set; }
        [Column(TypeName="money")]
        public decimal Price { get; set; }
        public string ProductType { get; set; }
        public int VendorId { get; set; }
        public Vendor Vendor { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}