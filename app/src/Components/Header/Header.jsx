import {React, useState, useEffect, useRef} from "react";
import style from "./Header.module.scss"
import search from "../../images/Header/Search.svg"
import location from "../../images/Header/Location.svg"
import phone from "../../images/Header/Phone.svg"
import clock from "../../images/Header/Clock.svg"
import shoppingBag from "../../images/Header/Shopping bag.svg"
import heart from "../../images/Header/Heart.svg"
import barChart from "../../images/Header/Bar chart.svg"
import logo from "../../images/Header/logo.png"
import menu from "../../images/Header/menu.svg"

function Header ()
{
    const [sticky, setSticky] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                setSticky(window.scrollY >= 80);
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    function click()
    {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <header className="lg:text-sm 2xl:text-lg mx-auto max-[1024px]:text-xs ">
            <div id="infBar" className="h-20 flex flex-row justify-between items-center w-5/6 mx-auto flex-wrap max-[1024px]:w-full max-[1024px]:justify-around max-[768px]:bg-sun-yellow">
            <img className="max-[1024px]:w-20" src={logo} alt="logo" />
                <div className="border border-black rounded-xl flex">
                    <img className={style.searchImg} src={search} alt="search" />
                    <input className="rounded-r-xl right-0 max-[1024px]:w-16" type="text" />
                </div>
                <div className=" flex underline ">
                    <img className="max-[1024px]:w-4" src={location} alt="location" />
                    <p>Москва</p>
                </div>
                <div className="flex gap-2">
                    <img className="w-6 max-[1024px]:w-4" src={phone} alt="phone" />
                    +7(495)128-11-38
                </div>
                <div className="flex gap-2">
                    <img className="w-6 max-[1024px]:w-4" src={clock} alt="clock" />
                    Ежедневно с 9:00 до 22:00
                </div>
                <div className="rounded-xl bg-black text-white w-28 h-[24px] flex justify-around text-sm items-center max-[1024px]:w-8">
                    <p className="max-[1024px]:hidden">26 546&#8381;</p>
                    <img className="w-[20px]" src={shoppingBag} alt="shopingBag" />
                </div>
                <div className="flex gap-6 max-[1024px]:gap-2">
                    <img className="w-6" src={barChart} alt="bar chart" />
                    <img className="w-6" src={heart} alt="heart" />
                </div>
                <button onClick={click} className="hidden max-[768px]:block">
                    <img src={menu} alt="menu" />
                </button>
             </div>
             <div ref={navbarRef} className={sticky ? style.sticky : style.navBarCont}>
            <div className="h-12 bg-nav-yellow flex justify-between min-[2400px]:w-4/6 w-5/6 mx-auto flex-wrap min-[2200px]::w-4/6 text-base max-[1024px]:text-[10px]">
                <div className="flex w-1/4 justify-between items-center max-[1024px]:w-2/6 max-[1536px]:text-[13px]">
                    <a className="hover:bg-white  px-2 rounded-2xl" href="#catalog">Каталог товаров</a>
                    <a className="hover:bg-white px-2 rounded-2xl" href="#brands">Бренды+</a>
                    <a className="hover:bg-white px-2 rounded-2xl" href="#styles">Стили+</a>
                </div>
                <div className="flex w-[60%] justify-between items-center max-[1024px]:w-[500px]  min-[1812px]:w-[50%]  ">
                    <a className="hover:bg-white px-1 rounded-2xl uppercase " href="#about">О компании</a>
                    <a className="hover:bg-white px-1 rounded-2xl uppercase " href="#garranty">Гарантия/Возврат</a>
                    <a className="hover:bg-white px-1 rounded-2xl uppercase " href="#delivery">ДОСТАВКА/ОПЛАТА</a>
                    <a className="hover:bg-white px-1 rounded-2xl uppercase " href="#reviews">ОТЗЫВЫ</a>
                    <a className="hover:bg-white px-1 rounded-2xl uppercase " href="#contacts">КОНТАКТЫ</a>
                </div>
            </div>
            
        </div>
        <aside className={clicked ? style.asideOn: style.asideOff}>
                    <div className="w-full text-end pr-2 pt-2">
                        <button onClick={()=> setClicked(!clicked)} className="w-fit bg-red-600 text-white rounded-md">Закрыть</button>
                    </div>
                    <a className="hover:bg-white px-2 rounded-2xl" href="#catalog">Каталог товаров</a>
                    <a className="hover:bg-white px-2 rounded-2xl" href="#brands">Бренды+</a>
                    <a className="hover:bg-white px-2 rounded-2xl" href="#styles">Стили+</a>
                    <a className="hover:bg-white px-2 rounded-2xl uppercase" href="#about">О компании</a>
                    <a className="hover:bg-white px-2 rounded-2xl uppercase" href="#garranty">Гарантия/Возврат</a>
                    <a className="hover:bg-white px-2 rounded-2xl uppercase" href="#delivery">ДОСТАВКА/ОПЛАТА</a>
                    <a className="hover:bg-white px-2 rounded-2xl uppercase" href="#reviews">ОТЗЫВЫ</a>
            </aside>
        </header>
    )
}
export default Header;