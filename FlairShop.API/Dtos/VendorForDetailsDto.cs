using System.Collections.Generic;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class VendorForDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EstateAddress { get; set; }
        public int PhoneNumber { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}