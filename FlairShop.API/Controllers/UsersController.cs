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
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IFlairRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IFlairRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailsDto>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception($"Updating user {id} failed on update!");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _repo.GetUser(id);

            _repo.Delete(user);
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting user {id} failed on save!");
        }
        [HttpPost("ActivateVendor")]
        public async Task<IActionResult> ActivateVendor(Vendor vendor)
        {
            var vendorUser = await _repo.GetUser(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            vendorUser.IsVendor = true;

            vendor.User = vendorUser;

            await _repo.AddVendor(vendor);
            await _repo.SaveAll();

            return Ok();
        }
    }
}