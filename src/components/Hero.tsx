import ArticlOptions from "@/ui/ArticlOptions";
import Button from "@/ui/Button";

function Hero() {
  return (
    <div className='flex justify-center text-center  '>
      <div className=''>
        <ArticlOptions
          title='О естественном исцелении'
          className='flex-row md:w-150 w-auto mx-2 md:mx-auto pb-3  bg-violet-800/60 rounded-3xl px-5 col-start-2'
        >
          Уважаемы гости и посетители нашего сайта!
          <br />
          Рады вас приветствовать в данном информационном и обучающем
          пространстве! Здесь вы сможете узнать о том, что такое Рейки и другие
          системы Естественного Исцеления и Энерговибрационные Настройки,
          записаться на благотворительный сеанс любой из Энергий или на платный
          дистанционный курс исцеления. Так же на данном сайте вы можете
          оставить заявку на платное индивидуальное обучение Рейки или любой из
          Энергий ! Добро пожаловать!
        </ArticlOptions>
      </div>
    </div>
  );
}

export default Hero;
