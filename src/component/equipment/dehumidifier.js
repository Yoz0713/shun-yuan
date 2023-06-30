import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function Dehumidifier() {
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
        <section className='dehumidifier' ref={animateRef} style={{ width: "80%", margin: "0 auto 0 5% " }}>
            <div className="left" style={{ flex: "0 0 38%" }}>
                <EquipmentTitle />
                <h4>吊隱式除濕機(清淨型)</h4>
                <p>搭載業界獨家無動力熱管循環系統，不須電力輸入，即可有效增加蒸發器效能，發揮更好的除濕效果，節能、省電，又環保。</p>
                <img src={require("../../../img/equipment/webp/005-dehumidifier-text-bg.webp").default} style={{ width: "92%", height: "auto", marginTop: "2vw" }} />
            </div>
            <div className="right" style={{ order: -1, flex: "0 0 55%" }}>
                <img src={require("../../../img/equipment/webp/006-dehumidifier-bg.webp").default} style={{ width: "60%", height: "auto" }} />
            </div>
        </section>
    )
}
