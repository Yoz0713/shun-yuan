import React from 'react'
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEquipmentAction } from '../redux/action/equipmentContent';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Import animation libary
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function FifthPage() {
    const animateScope = useRef(null)

    const handleMouseMove = function (e) {
        let gg = gsap.timeline()
        gg.to(".fifth-page-bg .imgBox img", {
            x: `${(e.clientX / 2 - e.pageX) / 35}px`
        })

    }
    return (
        <section className="fifth-page" ref={animateScope} onMouseMove={handleMouseMove}>
            <FifthPagePara />
            <FifthPageBg />
        </section>
    )
}


function FifthPagePara() {
    return (
        <div className="fifth-page-para">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>CENTURY<br />CRAFT</h3>
            </div>
        </div>
    )

}

function FifthPageBg() {
    const arrType = [<Method />, <Equipment />]
    const toggleIndex = useSelector(state => state.fifthPageReducer.index)
    const dispatch = useDispatch();
    const arrBtn = [
        "工法",
        "設備"
    ]

    return (
        <TransitionGroup>
            <CSSTransition
                in={toggleIndex}
                key={toggleIndex}
                timeout={600}
                classNames="fifth-page-toggle"

            >
                <div className="fifth-page-bg">

                    {arrType[toggleIndex]}


                    <ImgBox img={webp[0].default} text={"0"} style={{ opacity: "0", pointerEvents: "none" }} />
                    <ul className="toggleBtn">
                        {arrBtn.map((item, i) => {
                            return (
                                <li onClick={() => {
                                    dispatch(toggleEquipmentAction(i))
                                }} style={{ backgroundColor: toggleIndex == i && "#c2a357", color: toggleIndex == i && "#fff" }}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </CSSTransition>
        </TransitionGroup>

    )
}

function ImgBox({ img, text, style, style2, url }) {
    return (
        <div className="imgBox" style={style}>
            <img src={img} style={style2} />
            <span>{text}</span>
            <Link to={url} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} />
        </div>
    )
}

function Method() {
    return (
        <>
            <ImgBox img={webp[0].default} text={"0"} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[14].default} text={"樓板厚度"} url={"/equipment/floorThick"} />
            <ImgBox img={webp[0].default} text={"0"} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[15].default} text={"車道坡度"} style2={{ objectPosition: "30% center" }} url={"/equipment/parking"} />
            <ImgBox img={webp[16].default} text={"樓高3米4"} url={"/equipment/floorHeight"} />
            <ImgBox img={webp[17].default} text={"隔間牆 "} style2={{ objectPosition: "30% center" }} url={"/equipment/brick"} />
            <ImgBox img={webp[18].default} text={null} style={{ transform: "scale(1.2) translate(-2.05vw,2.05vw)" }} style2={{ objectPosition: "-60% center" }} />
            <ImgBox img={webp[19].default} text={"水泥磅數"} style2={{ objectPosition: "30% center" }} url={"/equipment/cement"} />
        </>
    )
}

function Equipment() {
    return (
        <>
            <ImgBox img={webp[0].default} text={null} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[26].default} text={null} style2={{ objectPosition: "60% center" }} />
            <ImgBox img={webp[0].default} text={null} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[24].default} text={"櫻花廚下雙溫淨熱飲"} style2={{ objectPosition: "61% 70%" }} url={"/equipment/waterPurifier"} />
            <ImgBox img={webp[25].default} text={"垃圾冷藏"} url={"/equipment/garbage"} />
            <ImgBox img={webp[27].default} text={null} style2={{ objectPosition: "65% 65%" }} />
            <ImgBox img={webp[28].default} text={null} style={{ transform: "scale(1.2) translate(-2.05vw,2.05vw)" }} style2={{ objectPosition: "-100% 100%", }} />
            <ImgBox img={webp[23].default} text={"吊隱式除濕機"} style2={{ objectPosition: "49% center" }} url={"/equipment/dehumidifier"} />
        </>
    )
}



