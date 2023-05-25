import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function FloorThick() {
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
        <section className='floorThick' ref={animateRef}>
            <div className="left">
                <EquipmentTitle />
                <h4>樓板厚度18公分</h4>
                <p>樓地板隔音效果和厚度有直接關係,一般樓板都是15公分厚度，樓上跑動、甚至走路重一點，樓下往往聽得一清二楚。秉持建築安全的理念，樓地板都改為18分厚度，對降低震動、隔絕噪音效果提升不少，讓居住品質更提升!</p>
            </div>
            <div className="right">
                <img src={require("../../../img/equipment/webp/001-floorThick-bg.webp").default} style={{ width: "90%", height: "auto", margin: "0 0 3vw 0" }} />
            </div>
        </section>
    )
}
