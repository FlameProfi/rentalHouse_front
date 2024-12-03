import './assets/css/normalize.css'
import './assets/css/firsovhouse.webflow.css'
import './assets/css/webflow.css'
import { useNavigate } from "react-router-dom"
import image1 from './assets/images/image-1.svg'
import image2 from './assets/images/image-2.svg'
import image3 from './assets/images/image-3.svg'
import image4 from './assets/images/image-4.svg'    
import image5 from './assets/images/image-5.svg'    
import image6 from './assets/images/image-6-png.png'
import image7 from './assets/images/img-7-jpg.jpg'
import arrowLeft from './assets/images/arrowLeft.svg'
import arrowRight from './assets/images/arrowRight.svg'
/* eslint-disable react/prop-types */
const NewHomePage = () => {
    const navigate = useNavigate();
    return (
      <>
        <div className="firstblock">
    <div className="z">
      <div className="navbar">
        <div className="firshouse">
          <div className="txfrhouse">Firsovhouse</div>
        </div>
        <div className="bookblock" onClick={() => navigate("/home")}>
          <div className="txbook" >Забронировать</div>
        </div>
      </div>
      <div className="housenear">
        <div className="seasidehouse">
          <div className="txfirsovhouse">Firsovhouse</div>
          <div className="txseasidehouse">Дом у моря</div>
        </div>
        <div className="gridblocksea">
          <div className="gridsea-1">
            <div className="bookdb" onClick={() => navigate("/home")}>
              <div className="txbook" onClick={() => navigate("/home")}>Забронировать</div>
            </div><img src={image1} loading="lazy" alt="" className="image-4" />
          </div>
          <div className="gridsea-2"><img src={image2} loading="lazy" alt="" className="image-3" /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="secondblock">
    <div className="z">
      <div className="guesthouse">
        <div className="texfirsthouse">ГОстевой дом</div>
        <div className="txsecondhouse">для отдыха на<br/>берегу Финского залива</div>
      </div>
      <div className="secondguesthouse">
        <div id="w-node-_4ecbcde2-3e8a-75ba-34d5-8a1352f22b1b-023c74d6" className="blockimg"><img src={image3} loading="lazy" alt="" /></div>
        <div id="w-node-cc7fa915-d51c-c442-49bc-8a4c59796e30-023c74d6" className="blockinf">
          <div className="grhouse-1">
            <div className="text-block-3">Заповедная красота полуострова Киперорт на северном<br/>побережье Финского залива, в Выборгском районе<br/>Ленинградской области – МЕСТО СИЛЫ.</div>
          </div>
          <div className="grhouse-2">
            <div className="housesecondunder">
              <div className="text-block-5">Здесь можно отдохнуть в приятном одиночестве, провести время с семьей или небольшой компанией друзей, отметить праздники и любимый Новый год у украшенной, но не срубленной елки.</div>
            </div>
            <div className="housesecondunder">
              <div className="text-block-5">Здесь пахнет лесом, слышен шум волны и клюющих семечки в кормушке птиц, очаровывают закаты и манят звёзды бескрайнего неба, особенно, когда летом лежишь на крыше или зимой в сугробе.</div>
            </div>
            <div className="housesecondunder">
              <div className="text-block-5">Здесь можно забыть о заботах и сменить ежедневное напряжение на расслабляющий медитативный ритм.</div>
            </div>
          </div>
          <div className="grhouse-3">
            <div className="text-block-4">Такое место есть не только в ваших мечтах!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="thirdblock">
    <div className="z">
      <div className="txconditions">ПРиглашаем!</div>
      <div className="gridinvite">
        <div id="w-node-f7fccfc8-6e90-846f-abfe-89b129ca1c6d-023c74d6">
          <div className="txinvitegr">Мы, умудрённые жизненным опытом  и влюблённые в жизнь петербуржцы, Ирина и Игорь<br/>Приглашаем вас в гостевой экодомик в Приморске, который   мы построили для вас   с любовью  и осенью 2024  открыли первый сезон.</div>
        </div>
        <div id="w-node-_63a9bcd6-da1a-3c6c-2d8e-c5141b426f5d-023c74d6" className="blockimg"><img src={image4} loading="lazy" alt="" /></div>
        <div id="w-node-_09204138-a6da-6bd6-8172-7a0f093aaff5-023c74d6" className="blockimg"><img src={image5} loading="lazy" alt="" /></div>
        <div id="w-node-f3292580-0ea4-b101-b047-8be5bdea9717-023c74d6" className="div-block">
          <div className="txinvitegr">Выбирайте, чем наполнить незабываемые дни отдыха в<br/>комфортном жилище на берегу: прогулками по карельскому лесу и экотропам, которые радуют  сохранностью,  приятным времяпровождением в постели под любимый сериал, мясом на гриле и бокалом игристого, летними урожаями  ягод и грибов и путешествием на шверботе , зимними  походами на беговых  лыжах, катанием на кайте на горных по льду залива,  рыбалкой зимней, летней, чтением аутентичных книг загорая  на зеленой крыше под летним солнцем.</div>
          <div className="txfir">Все это   сезонно   возможно,  в FIRSOVHOUSE !</div>
        </div>
      </div>
    </div>
  </div>
  <div className="fourthblock">
    <div className="z">
      <div className="txconditions">Условия сдачи</div>
      <div className="gridconditions">
        <div id="w-node-ea3925af-00ea-c316-1a0a-11b7e5c578e5-023c74d6" className="undeconditions">
          <div className="txmid">Посуточно</div>
          <div className="txunder">Невольно от настоящего я перешёл к 1825 году… Но и в 1825 году герой мой был уже возмужалым, семейным человеком. Чтобы понять его, мне нужно было перенестись к его молод</div>
          <div className="txnm">1.000₽</div>
        </div>
        <div id="w-node-becbf088-814d-11de-d95c-4929f80e2dbc-023c74d6" className="undeconditions">
          <div className="txmid">Посуточно</div>
          <div className="txunder">Невольно от настоящего я перешёл к 1825 году… Но и в 1825 году герой мой был уже возмужалым, семейным человеком. Чтобы понять его, мне нужно было перенестись к его молод</div>
          <div className="txnm">1.000₽</div>
        </div>
        <div id="w-node-dbf74d80-12dd-ce91-7102-2bec1addc5cd-023c74d6" className="undeconditions">
          <div className="txmid">Посуточно</div>
          <div className="txunder">Невольно от настоящего я перешёл к 1825 году… Но и в 1825 году герой мой был уже возмужалым, семейным человеком. Чтобы понять его, мне нужно было перенестись к его молод</div>
          <div className="txnm">1.000₽</div>
        </div>
      </div>
    </div>
  </div>
  <div className="fifthblock">
    <div className="z">
      <div className="galleryslider">
        <div className="txconditions">Галерея</div>
        <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
          <div className="mask w-slider-mask">
            <div className="slide w-slide">
              <div className="div-block-2"><img src={image6} loading="lazy" sizes="(max-width: 479px) 28vw, 29vw" srcSet="images/image-6-png-p-500.png 500w, images/image-6-png.png 541w" alt="" className="image-6" /></div>
            </div>
            <div className="slide w-slide">
              <div className="div-block-2"><img src={image1} loading="lazy" alt="" className="image-5" /></div>
            </div>
            <div className="slide w-slide">
              <div className="div-block-2"><img src={image4} loading="lazy" alt="" className="image-5-copy" /></div>
            </div>
            <div className="slide w-slide">
              <div className="div-block-2"><img src={image1} loading="lazy" alt="" className="image-5" /></div>
            </div>
            <div className="slide w-slide">
              <div className="div-block-2"><img src={image1} loading="lazy" alt="" className="image-5" /></div>
            </div>
          </div>
          <div data-w-id="b4e3279c-8a84-e138-e8d4-e3c59a401962" className="left-arrow w-slider-arrow-left">
            <div className="around">
              <div className="arrowleft w-embed"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.63652 7.80719C3.24599 8.19771 3.24599 8.83088 3.63652 9.2214L9.29341 14.8783C9.68388 15.2688 9.68388 15.9018 9.29341 16.2923C8.90295 16.6828 8.26988 16.6828 7.87941 16.2923L0.808411 9.2213C0.62094 9.03377 0.515625 8.77946 0.515625 8.5143C0.515625 8.24913 0.62094 7.99482 0.808411 7.8073L7.87941 0.736297C8.26988 0.345831 8.90295 0.345831 9.29341 0.736297C9.68388 1.12676 9.68388 1.75983 9.29341 2.1503L3.63652 7.80719Z" fill="currentcolor"></path>
                </svg></div>
            </div>
          </div>
          <div data-w-id="b4e3279c-8a84-e138-e8d4-e3c59a401964" className="right-arrow w-slider-arrow-right">
            <div className="arrowrg">
              <div className="arrowright w-embed"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.36348 9.19281C6.75401 8.80229 6.75401 8.16912 6.36348 7.7786L0.706589 2.1217C0.316123 1.73124 0.316123 1.09817 0.706588 0.707705C1.09705 0.317238 1.73012 0.317238 2.12059 0.707703L9.19159 7.7787C9.37906 7.96623 9.48438 8.22054 9.48438 8.4857C9.48438 8.75087 9.37906 9.00518 9.19159 9.1927L2.12059 16.2637C1.73012 16.6542 1.09705 16.6542 0.706589 16.2637C0.316123 15.8732 0.316124 15.2402 0.706589 14.8497L6.36348 9.19281Z" fill="currentcolor"></path>
                </svg></div>
            </div>
          </div>
          <div className="slide-nav w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="sixthblock">
    <div className="z">
      <div className="txconditions">Отзывы</div>
      <div className="feedbackslider">
        <div data-delay="4000" data-animation="slide" className="slider-2 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
          <div className="mask-2 w-slider-mask">
            <div className="slide-6 w-slide">
              <div className="infoblock">
                <div className="leftinfo"><img src={image7} loading="lazy" alt="" className="image-10" /></div>
                <div className="rightinfo">
                  <div className="text-block-7">Важнейшее значение в романе имеют философские взгляды писателя. Публицистические главы предваряют и объясняют художественное описание событий. Фатализм Толстого связан с его пониманием стихийности истории как «бессознательной, общей, роевой жизни человечества». Главная мысль романа, по словам самого Толстого, — «мысль народная». Народ в п</div>
                  <div className="text-block-8">Юлия Ш.<br/>18 июля <span className="text-span">2023</span></div>
                </div>
              </div>
            </div>
            <div className="slide-6 w-slide">
              <div className="infoblock">
                <div className="leftinfo"><img src={image7} loading="lazy" alt="" className="image-10" /></div>
                <div className="rightinfo">
                  <div className="text-block-7">Важнейшее значение в романе имеют философские взгляды писателя. Публицистические главы предваряют и объясняют художественное описание событий. Фатализм Толстого связан с его пониманием стихийности истории как «бессознательной, общей, роевой жизни человечества». Главная мысль романа, по словам самого Толстого, — «мысль народная». Народ в п</div>
                  <div className="text-block-8">Юлия Ш.<br/>18 июля <span className="text-span">2023</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-arrow-2 w-slider-arrow-left"><img src={arrowLeft} loading="lazy" alt="" className="image-8" /></div>
          <div className="right-arrow-2 w-slider-arrow-right">
            <div className="rightarrowsecond"><img src={arrowRight} loading="lazy" alt="" className="image-9" /></div>
          </div>
          <div className="slide-nav-2 w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="z">
      <div>
        <h1>тут что то будет</h1>
      </div>
    </div>
  </div>
      </>
    );
  };
  
  export default NewHomePage;
  