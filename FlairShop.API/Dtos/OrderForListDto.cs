using System;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class OrderForListDto
    {
        public int OrderId { get; set; }
        public string Status { get; set; }
    }
}