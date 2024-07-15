import React from "react";
import Baner from "./baner/Baner";
import Light from "./light/Light";
import Hits from "./hits/Hits";
import New from "./New/New";
import Styles from "./style/Styles";
import Brands from "./brands/Brands";
import AboutUs from "./aboutUs/AboutUs";


function Main()
{
    return(
        <main className="wfill mx-auto">
            <Baner/>
            <Light/>
            <Hits/>
            <New/>
            <Styles/>
            <Brands/>
            <AboutUs/>
           
        </main>
    )
}
export default Main;