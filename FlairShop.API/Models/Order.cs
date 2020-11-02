using System;

namespace FlairShop.API.Models
{
    public class Order
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