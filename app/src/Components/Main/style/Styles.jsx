import React from "react";
import img1 from "../../../images/styles/1.png";
import img2 from "../../../images/styles/2.png";
import img3 from "../../../images/styles/3.png";
import img4 from "../../../images/styles/4.png";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css"

function Styles() {
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 	768,
        settings: {
          slidesToShow: 1,
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
  const [data, setData] = useState([]);
  
  const d = [
    {
      img: img1,
      name: "Скандинавский",
    },
    {
      img: img2,
      name: "Лофт",
    },
    {
      img: img3,
      name: "Прованс",
    },
    {
      img: img4,
      name: "Современный",
    },
  ];

  useEffect(() => {
    setData(d);
  }, []);

  return (
    <section id="styles" className="mt-14">
      <div className="flex items-center mb-12">
        <div className="bg-grey h-[2px] w-full"></div>
        <div className="mx-[5%] font-semibold uppercase">Стили</div>
        <div className="bg-grey h-[2px] w-full"></div>
      </div>
      <div className="w-4/6 mx-auto ">

      
      <Slider {...settings}>
      {
                data.map(item =>
                  
                  <div className="">
                     {/* <a href="#" className="w-[344px] h-[190px] max-[1024px]:w-[300px] bg-center mx-auto pb-[10px] flex justify-center items-end" style={{backgroundImage: `url(${item.img})`}}>
                        <p className="text-white text-xl">{item.name}</p>
                    </a> */}
                    <a className="flex justify-center items-end" href="#">
                      <div className="absolute text-white text-3xl mb-3 tracking-wider max-[1440px]:text-2xl max-[650px]:text-xl ">
                        {item.name}
                      </div>
                      <img className="w-[98%]" src={item.img} alt="img" />
                    </a>
                  </div>  
                  
                   
                )
            }
      </Slider>
      </div>
    </section>
  );
}

export default Styles;
