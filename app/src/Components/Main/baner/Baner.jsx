import React from "react";
import Baner1 from "../../../images/Baners/baner1.png"
import Baner2 from "../../../images/Baners/baner2.png"
import Baner3 from "../../../images/Baners/baner3.png"


function  Baner(){
    return (
        <section className="flex justify-between w-4/6 mx-auto max-[1024px]:w-[85%] max-[768px]:w-full min-[769px]:mt-[67px] ">
            <img className="w-[65%] h-[350px] max-[2560px]:h-[450px] max-[1440px]:h-[250px] max-[1024px]:h-[230px] max-[768px]:h-[200px] max-[465px]:h-[120px] max-[375px]:h-[100px]" src={Baner1} alt="Baner1"  />
            <div className=" flex flex-col justify-between w-[34%] h-[350px] max-[2560px]:h-[450px] max-[1440px]:h-[250px] max-[1024px]:h-[230px] max-[768px]:h-[200px] max-[465px]:h-[120px] max-[375px]:h-[100px] ">
                <img className="h-[60%] max-[425px]:h-[50%] "  src={Baner2} alt="Baner2" />
                <img className="h-[33%] w-full "  src={Baner3} alt="Baner3" />
            </div>
            
        </section>   
    )
}
export default Baner;