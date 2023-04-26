import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function FloorHeight() {
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
        <section className='floorHeight' ref={animateRef}>
            <div className="left">
                <EquipmentTitle />
                <h4>樓板挑高3米4</h4>
                <p>挑高的室內空間，能營造出大器的寬敞感，不必擔心壓迫感，具備採光明亮特色以及利用高度優勢設計收納，裝潢設計上也更能發揮，一般樓層高度不可能懸掛吊燈，但挑高住宅多了吊燈，光影豐富有趣，讓空間運用更靈活、更有彈性。</p>
            </div>
            <div className="right">
                <img src={require("../../../img/equipment/webp/000-floorHeight-bg.webp").default} style={{ width: "90%", height: "auto" }} />
            </div>
        </section>
    )
}
