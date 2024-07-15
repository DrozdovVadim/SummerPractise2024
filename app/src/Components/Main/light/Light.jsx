import React from "react";
import img1 from "../../../images/light shop/1.png"
import img2 from "../../../images/light shop/2.png"
import img3 from "../../../images/light shop/3.png"
import img4 from "../../../images/light shop/4.png"
import img5 from "../../../images/light shop/5.png"
import img6 from "../../../images/light shop/6.png"
import img7 from "../../../images/light shop/7.png"
import img8 from "../../../images/light shop/8.png"

function Light()
{
    const data=
    [
        {
            img: img1,
            text: 'люстры',
        },
        {
            img: img2,
            text: 'бра',
        },
        {
            img: img3,
            text: 'торшер',
        },
        {
            img: img4,
            text: 'потолочные светильники',
        },
        {
            img: img5,
            text: 'настольные лампы',
        },
        {
            img: img6,
            text: 'встраиваемые светильники',
        },
        {
            img: img7,
            text: 'уличные светильники',
        },
        {
            img: img8,
            text: 'лампочки',
        }    ]
    
    return(
        <section id="catalog" className="mt-12  max-[2560px]:text-[22px] max-[1024px]:text-[16px]">
            <div className="flex items-center mb-12">
                <div  className="bg-grey h-[2px] w-full"></div>
                <div className=" min-w-[35%]  max-[768px]:min-w-[48%] font-semibold uppercase ">Интернет-магазин светильников Light</div>
                <div className=" bg-grey h-[2px] w-full"></div>
            </div>
            <div className=" flex w-5/6 justify-between flex-wrap gap-6 mx-auto mt-12 2xl:w-4/6 max-[1440px]:w-4/6 max-[1024px]:w-[85%] max-[768px]:w-[95%] max-[465px]:gap-1  max-[465px]:justify-around " >
            {
                data.map(item =>
                    
                    <div className="w-[344px] h-[324px] flex justify-center items-end pb-[20px] bg-no-repeat max-[1440px]:w-[200px] max-[1440px]:h-[250px] max-[1440px]:bg-center max-[1024px]:w-[180px] max-[1024px]:h-[250px] max-[768px]:w-[160px] max-[768px]:h-[200px] max-[465px]:bg-cover max-[465px]:w-[105px] max-[465px]:h-[110px]" style={{backgroundImage: `url(${item.img})`}}>
                        <div className="flex items-center justify-around w-3/4 ">
                            <div className="bg-slate-600 w-full h-[2px]  rounded-md"></div>
                            <div className="mx-3 w-auto max-[1440px]:text-[15px] max-[768px]:text-[12px] max-[768px]:mx-1 max-[465px]:text-[8px]">{item.text}</div>
                            <div className="bg-slate-600 w-full h-[2px]  rounded-md"></div>
                        </div>
                       
                    </div>
                )
            }

        </div>
        </section>
        
    )
}
export default Light;
