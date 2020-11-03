using System;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class OrderForCreateDto
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string ToAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public string Status { get; set; }
    }
}