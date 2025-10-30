import Button from "@/ui/Button";
import RightMenu from "./RightMenu";

function HeroAbout() {
  return (
    <div className=' h-200' id='rightmenu'>
      <h2 className=' text-center text-2xl md:text-4xl py-15'></h2>
      <div className=' grid  grid-cols-[auto_auto_minmax(50px,_200px)] items-center mx-20 grid-rows-[auto_auto_auto'>
        <RightMenu />
        <Button titlebtn='Сеанс Энергией Рейки' size='large' />
      </div>
    </div>
  );
}

export default HeroAbout;
