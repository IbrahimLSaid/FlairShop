using System;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class OrderForDetailsDto
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }
        public string ToAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public string Status { get; set; }
    }
}