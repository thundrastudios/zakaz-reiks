"use client";
import { CircleX, List } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className='flex justify-end  py-5 md:justify-center'>
        {/* desktop nav */}
        <nav className='hidden md:flex gap-5 '>
          <Link href='/'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Главная
            </button>
          </Link>
          <Link href='#rightmenu'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Энергия Рейки
            </button>
          </Link>
          <Link href='/energy'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Обучение Рейки
            </button>
          </Link>
        </nav>

        {/* hamburger */}
        {nav ? (
          // close button
          <CircleX
            className=' fixed right-[30px] fa fa-times z-50  md:hidden'
            aria-hidden='true'
            onClick={showNav}
          ></CircleX>
        ) : (
          <List
            className='fa fa-bars   md:hidden  '
            aria-hidden='true'
            onClick={showNav}
          ></List>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${
            nav ? "right-[0px]" : "right-[-100vw]"
          } `}
        >
          <Link href='/'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Главная
            </button>
          </Link>
          <Link href='#rightmenu'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Энергия Рейки
            </button>
          </Link>
          <Link href='/energy'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Обучение Рейки
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
  {
    /*<header className='md:justify-center md:py-5 '>
      <ul className='md:flex justify-center '>
        <li>
          <Link href='/'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Главная
            </button>
          </Link>
        </li>
        <li>
          <Link href='#rightmenu'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Энергия Рейки
            </button>
          </Link>
        </li>
        <li>
          <Link href='/energy'>
            <button className='text-sm md:text-2xl px-2 md:px-5 py-3 hover:bg-pink-400 transition-color duration-300'>
              Обучение Рейки
            </button>
          </Link>
        </li>
      </ul>
    </header>*/
  }
}

export default Header;
