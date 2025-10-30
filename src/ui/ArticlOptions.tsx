import { ReactNode } from "react";
import Button from "./Button";
import Image, { type StaticImageData } from "next/image";
export type StaticImport = StaticImageData;
type ArticlT = {
  title: string;
  children?: ReactNode;
  className?: string;
  img?: string | StaticImport;
  next?: boolean;
  title_bd?: boolean;
};

function ArticlOptions({
  title,
  children,
  className,
  img,
  title_bd,
  next = true,
}: ArticlT) {
  const src = [
    { title: "О естественном исцелении", href: "/est-hlt" },
    { title: "Феномен благодарности", href: "/fen-ths" },
    { title: "Пять жизненных правил Рейки", href: "/fivepr" },
    { title: "РЕЙКИ ДЛЯ ДЕТЕЙ", href: "/forkisds" },
    { title: "В школе", href: "/inschool" },
    { title: "ЧТО ТАКОЕ РЭЙКИ", href: "/itswho" },
  ];
  return (
    <div className={` mt-40 mx-10 gap-10 ${className} `}>
      <h1 className={`text-3xl p-7 ${title_bd && "text-blue-400"}`}>{title}</h1>
      {img && (
        <Image
          src={img}
          alt={title}
          width={900}
          height={900}
          className='h-90 w-auto items-center mx-auto py-8 '
        />
      )}
      <p className='text-xl w-[minmax(50px,150px)] mx-auto pb-2'>{children}</p>{" "}
      {next && (
        <Button
          className='  '
          titlebtn='Подробнее'
          size='small'
          src={src.find((item) => item.title === title)?.href}
        />
      )}
    </div>
  );
}

export default ArticlOptions;
