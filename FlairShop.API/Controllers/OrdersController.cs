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
    [Route("api/users/{userId}/{controller}")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IFlairRepository _repo;

        public OrdersController(IFlairRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }


        [HttpPost]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreateOrder(int userId, OrderForCreateDto orderForCreateDto)
        {
            // if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            orderForCreateDto.UserId = userId;
            orderForCreateDto.OrderDate = DateTime.Now;

            var orderToCreate = _mapper.Map<Order>(orderForCreateDto);

            userFromRepo.Orders.Add(orderToCreate);
            await _repo.SaveAll();

            return Ok(orderForCreateDto);
        }
        [HttpGet]
        public async Task<IActionResult> GetOrders(int userId)
        {
            var Orders = await _repo.GetOrders(userId);

            var ordersToReturn = _mapper.Map<IEnumerable<OrderForListDto>>(Orders);

            return Ok(ordersToReturn);
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _repo.GetOrder(id);

            var orderToReturn = _mapper.Map<OrderForDetailsDto>(order);

            return Ok(orderToReturn);
        }
    }
}