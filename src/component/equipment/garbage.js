
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function Garbage() {
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
        <section className='garbage' ref={animateRef} style={{ width: "85%", margin: "0 auto 0 5% " }}>
            <div className="left" style={{ flex: "0 0 38%" }}>
                <EquipmentTitle />
                <h4>垃圾冷藏</h4>
                <p>可將垃圾低溫儲藏，使垃圾不會產生污水及臭味溢出，<br />
                    還有設置廚餘回收桶，住戶就不用將廚餘推放在家中，<br />
                    設備保持低溫，可以抑制細菌滋生，社區24小時開放<br />
                    住户投入垃圾，不需等候或追趕垃圾車。
                </p>

            </div>
            <div className="right" style={{ order: -1, flex: "0 0 60%" }}>
                <img src={require("../../../img/equipment/webp/007-garbage-bg.webp").default} style={{ width: "80%", height: "auto" }} />
            </div>
        </section>
    )
}
