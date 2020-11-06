using System.Collections.Generic;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class VendorForDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EstateAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<ProductForListDto> Products { get; set; }
    }
}