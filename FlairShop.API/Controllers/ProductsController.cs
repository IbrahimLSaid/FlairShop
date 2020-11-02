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
    public class ProductsController : ControllerBase
    {
        private readonly IFlairRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public ProductsController(IFlairRepository repo, IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _repo.GetProducts();

            var productsToReturn = _mapper.Map<IEnumerable<ProductForListDto>>(products);

            return Ok(productsToReturn);
        }
        
        [HttpGet("{id}", Name = "GetProduct")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _repo.GetProduct(id);

            var productToReturn = _mapper.Map<ProductForDetailsDto>(product);

            return Ok(productToReturn);
        }
        [HttpPost("Create")]
        public async Task<IActionResult> PlaceProduct(Product product)
        {
            var vendorFromRepo = await _repo.GetVendor(product.VendorId);

            // var productToCreate = _mapper.Map<Product>(productForDetailsDto);

            vendorFromRepo.Products.Add(product);
            await _repo.SaveAll();

            return Ok(product);
        }
        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateProduct(int id, [FromBody] ProductForUpdateDto productForUpdateDto)
        // {
        //     // if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //     //     return Unauthorized();

        //     var productFromRepo = await _repo.GetProduct(id);

        //     _mapper.Map(productForUpdateDto, productFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();

        //     throw new Exception($"Updating product {id} failed on save!");
        // }
        // [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var productToDelete = await _repo.GetProduct(id);

            // _mapper.Map<Product>(productToDelete);
            // _repo.Delete(productToDelete);
            // await _repo.SaveAll();
            
            _context.Products.Remove(productToDelete);
            await _repo.SaveAll();

            return Ok();
        }
    }
}