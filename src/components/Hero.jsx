import React from "react";
import WomanImg from "../components/woman_hero.png"
import HeroImg from "../components/bg_hero.svg"
import {Link} from 'react-router-dom'

export default function Hero(){
    return(
        <>
        <section>
            <img className="hidden lg:block" src={HeroImg}/>
            <div className="hidden lg:block mx-auto absolute top-[41%] left-[8%] justify-around">
                {/* text */}
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
                        <div>New Trend</div>
                    </div>
                    <h1 className="text-[30px] leading-[1.1] font-light lg:text-[70px]">
                        AUTUMN SALE STYLISH <br />
                        <span className="font-semibold">WOMENS</span>
                    </h1>
                    <Link className="font-semibold self-start uppercase border-b-2 border-black" to={"/product"}>
                        Discover More
                    </Link>
                </div>
            </div>
            <div className="hidden lg:block absolute top-20 left-[65%]">
                <img className="w-[220px]" src={WomanImg} />
            </div>
        </section>
        </>
    )
}


