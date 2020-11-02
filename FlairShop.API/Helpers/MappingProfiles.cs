using AutoMapper;
using FlairShop.API.Dtos;
using FlairShop.API.Models;

namespace FlairShop.API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //User Mapping
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailsDto>()
                .ForMember(dest => dest.Orders, opt => opt.MapFrom(src => src.Orders));
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();

            ///Product Mapping
            CreateMap<Product, ProductForListDto>();
        }
    }
}