using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using FlairShop.API.Data;
using FlairShop.API.Dtos;
using FlairShop.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FlairShop.API.Controllers
{
    [Authorize]
    [Route("api/{controller}")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IFlairRepository _repo;
        private readonly DataContext _context;

        public OrdersController(IFlairRepository repo, IMapper mapper, DataContext context)
        {
            _context = context;
            _repo = repo;
            _mapper = mapper;
        }


        [HttpPost("CreateOrder")]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreateOrder(int productId, OrderForCreateDto orderForCreateDto)
        {
            var userFromRepo = await _repo.GetUser(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));

            if (userFromRepo.Id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            orderForCreateDto.UserId = userFromRepo.Id;

            var orderToCreate = _mapper.Map<Order>(orderForCreateDto);

            orderToCreate.OrderDate = DateTime.Now;
            orderToCreate.Status = "Pending";
            orderToCreate.ToAddress = userFromRepo.Address;

            userFromRepo.Orders.Add(orderToCreate);
            await _repo.SaveAll();

            return Ok();
        }
        [HttpGet("all/{userId}")]
        public async Task<IActionResult> GetOrders(int userId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var orders = await _repo.GetOrders(userId);

            var ordersToReturn = _mapper.Map<IEnumerable<OrderForListDto>>(orders);

            return Ok(ordersToReturn);
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _repo.GetOrder(id);
            
            if (order.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var orderToReturn = _mapper.Map<OrderForDetailsDto>(order);

            return Ok(orderToReturn);
        }
    }
}