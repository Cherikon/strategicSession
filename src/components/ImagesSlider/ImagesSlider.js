import React from 'react';
import Slider from "react-slick";
import {cosplay1, cosplay2, cosplay3, cosplay4, cosplay5, cosplay6, cosplay7, Neo, pasha} from "../../images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";
import {FiveFourImg, ThreeFourImg, TwoFourImg} from "./styles";

export const ImagesSlider = () => {
    const getGuest = () => new URL(window.location.href).searchParams.get('guest');
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> ᐅ</div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> ᐊ</div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
        variableWidth: true
    };
    return (
        <div>
            <S.Container>
                <Slider {...settings}>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.ThreeFourImg>
                                <img src={Neo} alt="Нео"/>
                            </S.ThreeFourImg>
                        }
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.TwoFourImg>
                                <img src={cosplay1} alt="Косплей1"/>
                            </S.TwoFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.FiveFourImg>
                                <img src={cosplay2} alt="Косплей2"/>
                            </S.FiveFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.FiveFourImg>
                                <img src={cosplay3} alt="Косплей3"/>
                            </S.FiveFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.ThreeFourImg>
                                <img src={cosplay4} alt="Косплей4"/>
                            </S.ThreeFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.FiveFourImg>
                                <img src={cosplay5} alt="Косплей5"/>
                            </S.FiveFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.TwoFourImg>
                                <img src={cosplay6} alt="Косплей6"/>
                            </S.TwoFourImg>}
                    </div>
                    <div>
                        {getGuest() === '15'
                            ? <S.ThreeFourImg>
                                <img src={pasha} alt="Паша джедай"/>
                            </S.ThreeFourImg>
                            : <S.FiveFourImg>
                                <img src={cosplay7} alt="Косплей7"/>
                            </S.FiveFourImg>}
                    </div>
                </Slider>
            </S.Container>
        </div>
    );
};