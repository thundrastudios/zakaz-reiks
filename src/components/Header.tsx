import Link from "next/link";

function Header() {
  return (
    <header className='justify-center md:py-5 '>
      <ul className='flex justify-center '>
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
    </header>
  );
}

export default Header;
