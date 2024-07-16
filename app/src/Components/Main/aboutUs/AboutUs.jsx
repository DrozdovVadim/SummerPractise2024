import React from "react";
import img from "../../../images/aboutUs/background.png"

function AboutUs()
{
    return(
        <section id="about" className=" mt-16 w-full h-[613px] max-[768px]:text-sm max-[425px]:text-[10px]" style={{backgroundImage: `url(${img})`}}>
            
            <div className="w-4/6 flex flex-col gap-5 ml-auto max-[465px]:w-full">
                <div className="flex items-center mt-8  max-[465px]:mt-4">
                    <div className="text-start uppercase  min-w-[300px] mr-3 max-[465px]:min-w-[200px] min-[1024px]:text-[20px] font-semibold">Об интернет-магазине</div>
                    <div className="rounded-2xl bg-gray-600 h-[1px] w-full"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-justify   w-4/5 max-[465px]:w-[97%] max-[465px]:mx-auto">В нашем магазине представлено свыше 100 000 светильников из России, Китая и таких европейских стран, как Австрия, Бельгия, Великобритания, Германия, Испания, Италия, Чехия. У нас можно купить освещение для спальни, гостиной, кухни, коридора, ванной и детской комнат.</p>
                    <p className="text-justify  w-4/5 max-[465px]:w-[97%] max-[465px]:mx-auto">Мы регулярно обновляем наш ассортимент и делаем так, чтобы светильники у нас могли купить все, вне зависимости от покупательской способности. Поэтому у нас есть как продукция эконом-класса по демократичным ценам, так товар премиум-класса по более высокой стоимости.</p>
                    <p className="text-justify   w-4/5 max-[465px]:w-[97%] max-[465px]:mx-auto">
                    Доставку заказов мы выполняем в Тулу и в другие города Тульской области – Новомосковск, Донской, Алексин, Щекино, Ефремов, Богородицк, Плавск и прочие населенные пункты. Отправку производим любой транспортной или курьерской компанией на Ваш выбор (Деловые линии, ПЭК, СДЭК, Boxberry). Обращаем ваше внимание, что ограничений на минимальную стоимость заказа для доставки в регионы у нас нет.</p>
                </div>
                
                <a className="block rounded-full text-center bg-black text-white h-fit py-3 max-[375px]:text-[10px] w-1/4  max-[1440px]:w-1/3 max-[1024px]:text-sm max-[1024px]:w-1/2 max-[465px]:h-[45px] max-[465px]:ml-2 max-[425px]:w-2/3">Подробнее о нашей компании</a>
           </div>
            

        </section>
    )
}
export default AboutUs;