import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function Parking() {
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
        <section className='parking' ref={animateRef}>
            <div className="left">
                <EquipmentTitle />
                <h4>社區地下一層車道坡度1:8</h4>
                <p>Classy home全方位思考每位住戶的需求，並精心設計每個細節。然而由於跑車的底盤較低，在陡峭的坡道上易受損或無法通過。因此在車道坡度的設計上，我們採用了1:8的平緩坡度，讓低底盤的車輕鬆通過，同時減少底盤刮傷的風險，提供更順暢的行駛體驗。</p>
            </div>
            <div className="right" style={{ position: "relative", height: "100%", alignItems: "center" }}>
                <img src={require("../../../img/equipment/webp/003-car-bg.webp").default} style={{ height: "70%", width: "auto" }} />
                <p style={{ position: "absolute", right: "6.5vw", bottom: "10vw", fontSize: "1.2vw", color: "#fff", letterSpacing: "0.15em" }}>地下一層車道坡度1:8</p>
            </div>
        </section>
    )
}
