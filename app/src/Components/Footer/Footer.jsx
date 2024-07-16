import React from "react";
import img1 from "../../images/Footer/Phone.png"
import img2 from "../../images/Footer/Location.png"
import img3 from "../../images/Footer/Mail.png"
import img4 from "../../images/Footer/Clock.png"

function Footer()
{
    return(
        <footer className="bg-black min-[769px]:pt-12">
            <section className="flex justify-around w-full text-white max-[465px]:flex-col max-[465px]:text-[10px] max-[465px]:pl-5">
            <div className="flex flex-col gap-2">
                <p className="text-nav-yellow text-2xl  uppercase text-start mb-2">Каталог</p>
                <a className="text-white text-start underline font-extralight">Cветильники</a>
                <a className="text-white text-start underline font-extralight">Люстры и потолочные светильники</a>
                <a className="text-white text-start underline font-extralight">Настенные светильники</a>
                <a className="text-white text-start underline font-extralight">Настольные лампы</a>
                <a className="text-white text-start underline font-extralight">Торшеры напольные</a>
                <a className="text-white text-start underline font-extralight">Точененые светильники</a>
                <a className="text-white text-start underline font-extralight">Уличные светильники</a>
                <a className="text-white text-start underline font-extralight">Лампочки</a>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-start text-nav-yellow text-2xl uppercase">Покупателям</p>
                <p className="text-start underline font-extralight">О компании</p>
                <p className="text-start underline font-extralight">Оплата и доставка</p>
                <p className="text-start underline font-extralight">Гарантии и возврат товаров</p>
                <p className="text-start underline font-extralight"> Контакты</p>
                <p className="text-start underline font-extralight">Распродажа</p>
                <p className="text-start underline font-extralight">Отзывы</p>
                <p className="text-start underline font-extralight">карта сайта</p>
            </div>
            <div className=" flex flex-col gap-4 text-start">
                <p className="ml-[35px] text-start text-nav-yellow text-2xl uppercase max-[465px]:ml-0">Контакты</p>
                <div className="flex gap-2">
                                            
                        <img className="h-[15px] w-[27px] mt-2" src={img1} alt="PhoneImg" />
                    <div className="text-start">
                        <p className="text-2xl">8-800-551-39-31</p>
                        <p className="font-extralight">Звонок по России бесплатный</p>
                        <p className="underline font-extralight">Заказать обратный звонок</p>
                    </div>
                    
                </div>
                <div className="flex gap-2">
                    <div className="w-[27px] flex justify-center items-center">
                        <img className="w-[21px] h-[15px] " src={img3} alt="MailImg" />
                    </div>
                    <p className="underline font-extralight">info@lstr-shop.r</p>
                </div>
                <div className="flex gap-2">
                    <div>
                        <img src={img2} alt="LocationImg" />
                    </div>
                    
                    <div>
                        <p>Адреса пунктов самовывоза:</p>
                        <p>г.Тула, ул. Чмутова, д. 158 В</p>
                        <p>д. нижнее Елькино, 77</p>
                        <p>г.Тула, пр. Ленина, д.85, 1эт, оф.5</p>
                        <p className="underline">посмотреть все адреса в Туле</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-[27px] flex justify-center items-center">
                        <img className="w-[20px] h-[24px]" src={img4} alt="ClockImg" />
                    </div>
                    <p className="underline">с 9 до 23 часов без выходных</p>
                </div>
            </div>
            </section>
            <div className=" mt-6  mx-auto w-2/3 text-gray-500 text-xs">
                <p>© 2022 «Свет, Тула. Интернет-магазин люстр. Все права защищены. При копировании материала, ссылка на сайт - обязательна.</p>
                <p>Вся информация на сайте относительно размеров, параметров, комплектаций, технических характеристик, комплектующих и стоимости светильников прочих товаров, носит информационный характер и не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации звоните по телефонам: 8-800-551-39-31</p>
            </div>
        </footer>
    )
}
export default Footer;