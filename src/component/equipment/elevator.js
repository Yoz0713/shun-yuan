import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function Elevator() {
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
            }, "<+0.3").from(".content .right", {
                opacity: 0,
                y: 30,
                duration: 1.5
            }, "<")
        }, [animateRef]);
        return () => ctx.revert();
    }, [])
    return (
        <section className='dehumidifier' ref={animateRef} style={{ width: "85%", margin: "0 auto 0 " }}>
            <div className="left" style={{ flex: "0 0 38%" }}>
                <EquipmentTitle />
                <h4>防疫電梯</h4>
                <p>電漿離子空氣清淨機(醫療級等級)，多重殺菌消毒技術同步<br />釋放大量正負離子，有效對抗34種有害物質(病毒、過敏原、<br />黴菌、細菌)，6種臭味與寵物異味，2種害化學物質。</p>
                <img src={require("../../../img/equipment/svg/008-elevator.svg").default} style={{ width: "80%", height: "auto", marginTop: "2vw" }} />
            </div>
            <div className="right" style={{ position: "relative", order: -1, flex: "0 0 55%" }}>
                <img src={require("../../../img/index/webp/028-fifth-page-bg13.webp").default} style={{ width: "92%", height: "auto" }} />

            </div>
        </section>
    )
}
