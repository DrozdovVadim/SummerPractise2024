import React  from "react";
import img1 from "../../../images/Hits/1.png"
import img2 from "../../../images/Hits/2.png"
import img3 from "../../../images/Hits/3.png"
import img4 from "../../../images/Hits/4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style.css"


function New()
{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 2560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 	768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
          },
        },
        {
          breakpoint: 	640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 	400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      },
    }
        ]
      };
    const data=[
        {
            img: img1,
            name: "Подвестная люстра Mytony Crazia MOD46PL-08CH",
            oldPrice: '29370',
            newPrice: "19'677",
            new: "New",
        },
        {
            img: img2,
            name: "Подвестная люстра Mytony Crazia MOD46PL-08CH",
            oldPrice: '29370',
            newPrice: "19'677",
            new: "New",
        },
        {
            img: img3,
            name: "Подвестная люстра Mytony Crazia MOD46PL-08CH",
            oldPrice: '29370',
            newPrice: "19'677",
            new: "New",
        },
        {
            img: img4,
            name: "Подвестная люстра Mytony Crazia MOD46PL-08CH",
            oldPrice: '29370',
            newPrice: "19'677",
            new: "New",
        },
    ]
    return(
        <section className="mt-12">
             <div className="flex items-center mb-12">
                <div  className="bg-grey h-[2px] w-full"></div>
                <div className="min-w-36 mx-[5%] font-semibold uppercase text-lg">Новинки</div>
                <div className=" bg-grey h-[2px] w-full"></div>
            </div>
            <div className="w-4/6 mx-auto">
                <Slider {...settings}>
                
                {
                    data.map(item =>
                        <div>
                          <div className="w-full flex justify-end">
                          {
                            item.new ?
                            <p className="absolute bg-light-green text-white pl-3 pr-1 w-fit max-[768px]:text-xs">{item.new}</p> 
                            : ''
                          }
                          </div>
                        <a href="#" className="flex flex-col items-center gap-6 h-fit">
                            <img className="w-[332px]" src={item.img} alt="img" />
                            <p className="w-2/3 text-sm font-semibold underline max-[465px]:text-xs">{item.name}</p>
                            {
                                item.newPrice ? 
                                <div className="w-[332px]">
                                    <p className="text-2xl max-[465px]:text-xl">{item.newPrice}&#8381;</p>
                                    <p className="line-through text-xs font-semibold text-gray-400">{item.oldPrice}&#8381;</p>
                                </div> 
                                :
                                <p>
                                    {item.oldPrice}&#8381;
                                </p>
                            }
                            <a href="#" className="flex justify-center items-center w-1/2 max-[465px]:w-3/4 rounded-xl h-8 bg-sun-yellow font-semibold">
                                <p className="h-fit text-xs max-[350px]:text-[10px]">
                                В корзину
                                </p>
                            </a>
                            
                        </a>
                        </div>
                    )
                }
            </Slider>
        </div>
        </section>
        
    )
}
export default New