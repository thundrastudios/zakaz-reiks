import Link from "next/link";

interface ButtonProps {
  titlebtn: string;
  size: "large" | "medium" | "small";
  src?: string;
  className?: string;
}

function Button({ titlebtn, size, src, className }: ButtonProps) {
  return src ? (
    <Link href={src}>
      <button
        className={`${size === "large" && "text-2xl md:text-4xl px-8 py-5 "}${
          size === "medium" && "text-xl md:text-3xl px-3 py-4"
        }${size === "small" && "text-sm md:text-xl px-2 py-1"}  
       bg-pink-400 rounded-2xl hover:scale-125 hover:rounded-3xl  transition-all duration-300 mt-5 ${className}`}
      >
        {titlebtn}
      </button>
    </Link>
  ) : (
    <button
      className={` ${size === "large" && "text-2xl md:text-4xl px-8 py-5 "}${
        size === "medium" && "text-xl md:text-3xl px-3 py-4"
      }${size === "small" && "text-sm md:text-xl px-2 py-1"}  
       bg-pink-400 rounded-2xl hover:scale-125 hover:rounded-3xl  transition-all duration-300 mt-5 ${className}`}
    >
      {titlebtn}
    </button>
  );
}

export default Button;
