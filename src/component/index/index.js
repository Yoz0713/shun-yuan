import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import ForthPage from './forthPage';
import FifthPage from './fifthPage';
import SixthPage from './sixthPage';
import VideoIn from './videoIn';
import { useEffect, useRef } from 'react';
//引入redux
import { connect, } from 'react-redux';
import { slideChangeAction } from '../redux/action/slideChange';
//引入swiper
import Swiper, { EffectCreative } from 'swiper';
import 'swiper/css';
import SwiperCore, { Mousewheel } from "swiper/core";
import preloadImage from '../config/preload';
SwiperCore.use([Mousewheel]);
//組合成首頁
function Home({ slideChangeAction, myState, teamState }) {
    const swiperRef = useRef()

    let swiper1;
    //斜走特效
    useEffect(() => {

        if (swiperRef.current) {
            Swiper.use([EffectCreative]); // Import the EffectCreative module

            swiper1 = new Swiper(swiperRef.current, {
                // Optional parameters
                direction: 'vertical',
                // If you want to enable mousewheel support
                mousewheel: true,
                speed: 1100,
                effect: 'custom', // Set the effect to 'creative'

                on: {

                    slideChangeTransitionStart: function (e) {

                        slideChangeAction(e.activeIndex)
                    }

                },
            });
            swiper1.slideTo(myState, 0)
        }


        preloadImage(require("../../../img/lifefunction/webp/000-bg1.webp").default);
        preloadImage(require("../../../img/team/coporation/sunland/webp/000-sunland-bg.webp").default);
        preloadImage(require("../../../img/team/coporation/oliv/webp/000-oliv-bg.webp").default);
        preloadImage(require("../../../img/urban/svg/000-urban-bg.svg").default);
        preloadImage(require("../../../img/team/design/webp/000-architecture.webp").default);
        preloadImage(require("../../../img/team/design/webp/001-yunDing.webp").default);
        preloadImage(require("../../../img/team/design/webp/002-sunDa.webp").default);
        preloadImage(require("../../../img/team/design/webp/003-liuGuao.webp").default);

    }, []);

    useEffect(() => {
        console.log(swiperRef.current.swiper.slideTo(myState, 0))
    }, [teamState])

    return (
        <div className='index' >
            <VideoIn />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">  <Banner /></div>
                    <div className="swiper-slide slide2"> <SecondPage /></div>
                    <div className="swiper-slide slide3"><ThirdPage /></div>
                    <div className="swiper-slide slide4">< ForthPage /></div>
                    <div className="swiper-slide slide5">< FifthPage /></div>
                    <div className="swiper-slide slide6">< SixthPage /></div>

                </div>
            </div>



        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        myState: state.slideReducer.slide,
        teamState: state.teamReducer.flag
    };
};

const mapDispatchToProps = {
    slideChangeAction
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home)); 
