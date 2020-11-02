using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class ProductForDetailsDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ProductType { get; set; }
        public int VendorId { get; set; }
        public Vendor Vendor { get; set; }
    }
}