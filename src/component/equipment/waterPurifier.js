
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function WaterPurifier() {
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
        <section className='waterPurifier' ref={animateRef} style={{ width: "85%", margin: "0 auto 0 0% " }}>
            <div className="left" style={{ flex: "0 0 36%" }}>
                <EquipmentTitle />
                <h4>櫻花廚下雙溫淨熱飲</h4>
                <p>首創整合「水器與「加器於一機，自來水經過淨化後可直接飲用，或經過加熱提供飲用熱水。安裝簡單更搭配整合式觸控龍頭，冷熱水一觸即得。</p>
                <img src={require("../../../img/equipment/svg/005-purifier-text.svg").default} style={{ width: "100%", height: "auto", marginTop: "2vw" }} />
            </div>
            <div className="right" style={{ order: -1, flex: "0 0 62%", alignSelf: "flex-end", marginBottom: "4.5vw" }}>
                <img src={require("../../../img/equipment/webp/008-purifier-bg.webp").default} style={{ width: "75%", height: "auto", marginLeft: "-8vw" }} />
            </div>
            <img src={require("../../../img/equipment/svg/006-sakura.svg")} style={{ position: "absolute", right: "2vw", top: "2vw", width: "8vw", height: "auto" }} />
        </section>
    )
}
