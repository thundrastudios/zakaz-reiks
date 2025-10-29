import Button from "@/ui/Button";
import RightMenu from "./RightMenu";
import ArticlOptions from "@/ui/ArticlOptions";

function HeroAbout() {
  return (
    <div className=' h-200' id='rightmenu'>
      <h2 className=' text-center text-2xl md:text-4xl py-15'></h2>
      <div className=' grid  grid-cols-[auto_auto_minmax(50px,_200px)] items-center mx-20 grid-rows-[auto_auto_auto'>
        <RightMenu />
        <ArticlOptions
          title='О естественном исцелении'
          className='flex-row w-150 mx-auto pb-3  bg-violet-800/60 rounded-3xl px-5 col-start-2'
        >
          <p>Уважаемы гости и посетители нашего сайта!</p>
          <p>
            Рады вас приветствовать в данном информационном и обучающем
            пространстве!
          </p>
          <p>
            Здесь вы сможете узнать о том, что такое Рейки и другие системы
            Естественного Исцеления и Энерговибрационные Настройки, записаться
            на благотворительный сеанс любой из Энергий или на платный
            дистанционный курс исцеления.
          </p>
          <p>
            Так же на данном сайте вы можете оставить заявку на платное
            индивидуальное обучение Рейки или любой из Энергий ! Добро
            пожаловать!
          </p>
        </ArticlOptions>
      </div>
    </div>
  );
}

export default HeroAbout;
