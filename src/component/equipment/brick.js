import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from './index'
import FancyBox from '../config/fancyBox'

export default function Brick() {
    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".titleBox h2 span", {
                stagger: 0.05,
                opacity: 0,
                x: 30
            }).from(".content h4 ", {
                opacity: 0,
                x: 30
            }, "<+0.8").from(".content p", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".content .left img", {
                opacity: 0,
                x: 30
            }, "<").from(".content .left .more", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".content .right img", {
                opacity: 0,
                y: 30,
                duration: 1.5
            }, "<")
        }, [animateRef]);
        return () => ctx.revert();
    }, [])
    return (
        <section className='brick' ref={animateRef}>
            <div className="left">
                <EquipmentTitle />
                <h4>石膏磚</h4>
                <img src={require("../../../img/equipment/svg/002-brick-progress.svg").default} style={{ width: "22vw", height: "auto" }} />
                <div className="more">
                    比較表
                    <img src={require("../../../img/equipment/svg/003-arrow.svg")} />
                    <FancyBox>
                        <img src={require("../../../img/equipment/svg/004-brick-inner.svg").default} style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, margin: "auto", width: "85%", height: "auto" }} />
                    </FancyBox>
                </div>
            </div>
            <div className="right" style={{ width: "65%" }}>
                <img src={require("../../../img/equipment/webp/002-brick-bg.webp").default} style={{ width: "100%", height: "auto" }} />

            </div>
        </section>
    )
}
