import React, {useEffect, useState} from 'react';
import * as S from './styles'
import './index.scss'
import {hero1, hero2, arrow, alco, platypus, noalco, santa, please, colpac, jokeGift, megazord} from "./images";
import {ModalWindow} from "./components/Modal";

const MainApp = () => {
    const [isInitialImage, setIsInitialImage] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [isJokeGift, setIsJokeGift] = useState(false);
    const [isMegazordShow, setIsMegazordShow] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const startFadeScroll = 100;
            const fadeRange = 200;

            function updateHeaderOpacity() {
                const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

                let newOpacity = 1;

                if (currentScrollPos <= startFadeScroll) {
                    newOpacity = 1;
                } else if (currentScrollPos > startFadeScroll + fadeRange) {
                    newOpacity = 0;
                } else {
                    const scrollProgress = currentScrollPos - startFadeScroll;
                    const normalizedProgress = scrollProgress / fadeRange;
                    newOpacity = 1 - normalizedProgress;
                }

                setOpacity(newOpacity);
            }

            updateHeaderOpacity();
        });
    }, [])

    return (
        <div>
            <ModalWindow isOpen={isInitialImage} closeModal={() => setIsInitialImage(!isInitialImage)} $opacity={opacity}>
                Я&nbsp;коварный Илья и&nbsp;сегодня я&nbsp;расскажу вам всю необходимую информацию о&nbsp;нашей с&nbsp;вами стратсессии. Крути ниже
            </ModalWindow>
            <S.TopImage/>
            <S.Filter/>
            <S.MainBlock>
                <div>
                    <div>
                        <S.WelcomeBlock>
                            <div>
                                <h1>Дорогой друг, приглашаем тебя на&nbsp;стратсессию команды Доступы!</h1>
                                <p>
                                    Читай ниже план мероприятия и&nbsp;что от&nbsp;тебя требуется!
                                </p>
                            </div>
                            <img src={arrow} alt="Стрелка вниз" className="arrowDown"/>
                        </S.WelcomeBlock>
                    </div>
                </div>
                <S.Opacity>
                    <section className="mainText">
                        <h1>ПЛАН МЕРОПРИЯТИЯ</h1>
                        <h2>18 декабря</h2>
                        <p>
                            Сбор: 11:30 Венский Дом, 4й этаж, Демозал
                        </p>
                        <p>
                            Стратсессия: 12:00&nbsp;-&nbsp;15:30
                        </p>
                        <p>
                            Обед: 15:30&nbsp;-&nbsp;16:20
                        </p>
                        <p>
                            Выезд в VERT: 16:30
                        </p>
                        <p>
                            Дорога + пассивные активности: 16:30&nbsp;-&nbsp;19:30. Напитки и перекус в дорогу берите сами (в пиве - сила, в воде - микробы)
                        </p>
                        <p>
                            Ужин + разговоры: 20:30&nbsp;-&nbsp;00:00+
                        </p>
                        <p>
                            По&nbsp;приезде, при&nbsp;желании, можно сходить в&nbsp;спа после ужина
                        </p>
                    </section>
                </S.Opacity>
                <section className="withoutOpacity">
                    <h2>19 декабря</h2>
                    <p>
                        Подъем и завтрак: 9:00&nbsp;-&nbsp;10:00 (завтрак доступен с 8:00)
                    </p>
                    <p>
                        Тимбилдинг: 10:00&nbsp;-&nbsp;18:00.
                        Тут еще будет фуршет прикиньте
                    </p>
                    <p>
                        Обед: 14:00&nbsp;-&nbsp;15:00
                    </p>
                    <p>
                        Ужин: 19:00&nbsp;-&nbsp;20:00
                    </p>
                    <p>
                        Доп. активити + спа: 20:00&nbsp;-&nbsp;00:00+
                    </p>

                    *подробности активностей пока не раскрываем
                </section>
                <S.Opacity>
                    <section className="mainText">
                        <h2>
                            20 декабря
                        </h2>
                        <p>
                            Подъем и&nbsp;завтрак: 9:00&nbsp;-&nbsp;10:00 (завтрак доступен с 8:00)
                        </p>
                        <p>
                            Отъезд: 11:00
                        </p>
                        <p>
                            Домашний чилл: 14:00&nbsp;-&nbsp;00:00
                        </p>
                    </section>
                </S.Opacity>
                <section className="withoutOpacity">
                    <h2>
                        Но все не просто так, хотим получить от вас для наших активити:
                    </h2>
                    <br/>
                    <p className="padding">
                        <img alt="please" src={please} className="alco"/>
                        1. Скинуть нашему фронтендеру 3-5 своих детских фото (нет, ему не&nbsp;просто для себя)
                        + 1-2 актуальных фото (ну&nbsp;пожалуйста)
                    </p>
                    <br/>
                    <p className="padding">
                        <img alt="colpac" src={colpac} className="alco"/>
                        2. Раздобудьте пожалуйста новогодние колпаки (там в&nbsp;конце-концов НГ&nbsp;скоро)
                    </p>
                    <br/>
                    <p className="padding">
                        {isJokeGift
                          ? <img alt="santa" src={jokeGift} className="santa" onClick={() => setIsJokeGift(!isJokeGift)}/>
                          : <img alt="santa" src={santa} className="santa" onClick={() => setIsJokeGift(!isJokeGift)} />
                        }
                        3. Хотим провести тайного Санту, проведем опрос, кто также хочет
                    </p>
                    <br/>
                    <h2>
                        Важная информация
                    </h2>
                    <br/>
                    <p className="padding">
                        <img alt="alco" src={alco} className="alco"/>
                        - Точка не&nbsp;оплачивает алкоголь, поэтому нужно взять свой
                    </p>
                    <br/>
                    <p className="padding">
                        <img alt="noalco" src={noalco} className="noalco"/>
                        - В&nbsp;митинг руме запрещен свой алкоголь (но не в номерах и туалетах)
                    </p>
                </section>
                <S.Opacity>
                    <section>
                        <h1>
                            Локация офиса
                        </h1>
                        <p>Вставил карту офиса, чтобы приглашалка была жестко крутой</p>
                        <S.YMap>
                            <a
                                href="https://yandex.ru/maps/org/venskiy_dom/1266305635/?utm_medium=mapframe&utm_source=maps"
                                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
                                Венский дом</a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=60.589984%2C56.832390&mode=search&oid=1266305635&ol=biz&z=14.22"
                                frameBorder="1" allowFullScreen={true}
                            />
                        </S.YMap>
                    </section>
                </S.Opacity>
                <section>
                    <h1>
                        Локация отеля
                    </h1>
                    <p>Вставил карту отеля, чтобы приглашалка была жестко крутой</p>
                    <S.YMap>
                        <a
                            href="https://yandex.ru/maps/org/vert_landscape_hotel/154730088017/?utm_medium=mapframe&utm_source=maps"
                            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
                            Венский дом</a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=60.433922%2C55.528353&mode=search&oid=154730088017&ol=biz&z=16.12"
                            frameBorder="1" allowFullScreen={true}
                        />
                    </S.YMap>
                </section>
                <S.Opacity>
                    <section>
                        <h2>
                            Не&nbsp;придумал куда вставить, но&nbsp;тут&nbsp;же УТКОНОС, поэтому вставлю сюда
                        </h2>

                        {isMegazordShow
                          ? <img alt="megazord" src={megazord} className="platypus" onClick={() => setIsMegazordShow(!isMegazordShow)} />
                          : <img alt="platypus" src={platypus} className="platypus" onClick={() => setIsMegazordShow(!isMegazordShow)} />
                        }

                    </section>
                </S.Opacity>
                <section className="withoutOpacity">
                    <h2>
                        FUCKYOU с вопросами:
                    </h2>
                    <p>
                        1. Во сколько начинаются завтраки?
                    </p>
                    <p>
                        - Але, а вы вообще читали лендинг? Конечно же в 8:00!
                    </p>
                    <br/>
                    <p>
                        2. А что про спа? Сколько раз туда можно и какая продолжительность?
                    </p>
                    <p>
                        - Тут все просто, в спа можно раз в сутки на 3 часа (то есть если зашел и вышел через 15 минут, то больше нельзя будет)
                    </p>
                    <br/>
                    <p>
                        3. А что с собой нужно брать?
                    </p>
                    <p>
                        - Кроме хорошего настроения: колпаки новогодние, тапочки и купальник для спа (полотенца там выдают)
                    </p>
                    <br/>
                    <p>
                        4. А брать сменку?
                    </p>
                    <p>
                        - Можно походить в тапочках для спа, но лучше возьмите - да
                    </p>
                </section>
            </S.MainBlock>
            <S.BottomHero second={!isInitialImage} $opacity={opacity} id="hero">
                {isInitialImage
                    ? <img
                        src={hero1}
                        alt="hero1"
                        onClick={() => setIsInitialImage(!isInitialImage)}
                    />
                    : <img
                        src={hero2}
                        alt="hero2"
                        onClick={() => setIsInitialImage(!isInitialImage)}
                    />}
            </S.BottomHero>
        </div>
    );
};

export default MainApp;
