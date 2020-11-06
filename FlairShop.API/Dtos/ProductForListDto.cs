using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class ProductForListDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ProductType { get; set; }
        public string PhotoUrl { get; set; }
    }
}