using System;
using System.Collections.Generic;
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
    public class VendorsController : ControllerBase
    {
        private readonly IFlairRepository _repo;
        private readonly IMapper _mapper;
        public VendorsController(IFlairRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVendor(int id)
        {
            var vendor = await _repo.GetVendor(id);

            var vendorToReturn = _mapper.Map<VendorForDetailsDto>(vendor);

            return Ok(vendorToReturn);
        }

        [HttpGet]
        public async Task<IActionResult> GetVendors()
        {
            var vendors = await _repo.GetVendors();

            var vendorsToReturn = _mapper.Map<IEnumerable<VendorForListDto>>(vendors);

            return Ok(vendorsToReturn);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVendor(int id)
        {
            var vendor = await _repo.GetVendor(id);

            _repo.Delete(vendor);
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Deleting Vendor {id} failed on delete!");
        }
        // [HttpGet("{id}")]
        // public async Task<IActionResult> GetVendorProducts(int id)
        // {
        //     var vendorProducts = await _repo.GetVendorProducts(id);
            
        //     var vendorProductsToReturn = _mapper.Map<IEnumerable<ProductForDetailsDto>>(vendorProducts);

        //     return Ok(vendorProductsToReturn);
        // }
    }
}