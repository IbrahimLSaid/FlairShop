using System;
using FlairShop.API.Models;

namespace FlairShop.API.Dtos
{
    public class OrderForCreateDto
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}