import {React, useEffect, useState} from "react";
import img1 from "../../../images/brands/1.png"
import img2 from "../../../images/brands/2.png"
import img3 from "../../../images/brands/3.png"
import img4 from "../../../images/brands/4.png"
import img5 from "../../../images/brands/5.png"
import img6 from "../../../images/brands/logo1.png"
import img7 from "../../../images/brands/logo2.png"
import img8 from "../../../images/brands/logo3.png"
import img9 from "../../../images/brands/logo4.png"
import img10 from "../../../images/brands/logo5.png"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style.css"

function Brands()
{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 2560,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 	768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          },
        },
        {
          breakpoint: 	640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        },
      }
        ]
      };
    const [data, setData]=useState([])
    const d=[
        {
            img: img1,
            logo: img6,
        },
        {
            img: img2,
            logo: img7,
        },
        {
            img: img3,
            logo: img8,
        },
        {
            img: img4,
            logo: img9,
        },
        {
            img: img5,
            logo: img10,
        },
       
    ]
    useEffect(()=>{
        setData(d)
    },[])
    return(
        <section id="brands" className=" w-full  mt-12 ">
            <div className="flex items-center mb-12 mb ">
                <div  className="bg-grey h-[2px] w-full "></div>
                <div className=" mx-[5%] font-semibold uppercase">Бренды</div>
                <div className=" bg-grey h-[2px] w-full"></div>
            </div>
            <div className="">
            <Slider {...settings}
             className="flex mx-auto justify-between w-4/6 2xl:w-[1700px]  ">
            {
                data.map(item =>
     
                    <div>
                      <a href="#" className=" w-fit mx-auto flex items-center justify-center">
                        <div className="absolute ">
                          <img  src={item.logo} alt="logo" />
                        </div>
                        <img className="max-[768px]:w-[95%]" src={item.img} alt="img" />
                      </a>
                    </div>
                   
                )
            }
            </Slider>    
            </div>
            
            
        </section>
    )
}
export default Brands;