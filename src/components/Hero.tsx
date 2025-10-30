import ArticlOptions from "@/ui/ArticlOptions";
import Button from "@/ui/Button";

function Hero() {
  return (
    <div className='flex justify-center text-center  '>
      <div className=''>
        <ArticlOptions
          title='О естественном исцелении'
          className='flex-row w-150 mx-auto pb-3  bg-violet-800/60 rounded-3xl px-5 col-start-2'
        >
          <h3>Уважаемы гости и посетители нашего сайта!</h3>
          <p>
            Рады вас приветствовать в данном информационном и обучающем
            пространстве! Здесь вы сможете узнать о том, что такое Рейки и
            другие системы Естественного Исцеления и Энерговибрационные
            Настройки, записаться на благотворительный сеанс любой из Энергий
            или на платный дистанционный курс исцеления. Так же на данном сайте
            вы можете оставить заявку на платное индивидуальное обучение Рейки
            или любой из Энергий ! Добро пожаловать!
          </p>
        </ArticlOptions>
      </div>
    </div>
  );
}

export default Hero;
