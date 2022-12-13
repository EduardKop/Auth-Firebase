import { useState, useEffect } from "react";
import Link from "next/link";
import Search from './Search'
import SearchBtn from "./SearchBtn";
import AuthButtons from './authBtn'
import {useTheme} from 'next-themes'


export default function Header() {
    const [animateHeader, setAnimateHeader] = useState(false);
        useEffect(() => {
        const listener = () => {
        if (window.scrollY > 140) {
        setAnimateHeader(true);
        } 
        else setAnimateHeader(false);
        };
    window.addEventListener("scroll", listener);
    return () => {
        window.removeEventListener("scroll", listener);
    };
}, []);

    return (
    <header
        className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && "shadow-xl"
        }`}
        >
            <div className="max-w-7xl mx-auto ">
                <div
                className={`flex max-w-screen-xl py-10 ${
                animateHeader && "py-5"
                } mx-auto items-center justify-center px-8 trasition ease-in-out duration-500`}
                >
                    <h5 className="text-1xl font-bold text-purple-400 ">foodTracker</h5>
                <Search />
                <SearchBtn />
                        {/* <nav>
                        <ul className="flex items-center justify-start">
                        <li className="px-8 lg:px-6 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">First</li>
                        <li className="px-8 lg:px-6 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">First</li>
                        <li className="px-8 lg:px-6 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">First</li>
                        </ul>
                        </nav> */}
                <div className="loginBtns">
                    <AuthButtons />
                </div>
                </div>
            </div>
    </header>
);
}
