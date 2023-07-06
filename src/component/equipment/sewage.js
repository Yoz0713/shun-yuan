
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function Sewage() {
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
        <section className='sewage' ref={animateRef} style={{ width: "80%", margin: "0 auto", alignItems: "center" }}>
            <div className="left" style={{ flex: "0 0 40%" }}>
                <EquipmentTitle />
                <h4 style={{ lineHeight: "1.7em" }}>諧振活化水處理器<br />優質的生活，就從飲水健康開始</h4>
                <p style={{ width: "30vw" }}>健康活力由好水開始，本產品通過「SGS檢驗」，我們運用最先進的水科學及處理技術，重造大自然生成好水的構造，將水重新排列為小水分子團，恢復成原來等質清純、活潑的山泉活水。</p>
                <img src={require("../../../img/equipment/webp/010-sewage-machine.webp").default} style={{ width: "5vw", height: "auto", margin: "1vw 0 1vw 12vw" }} />
                <h4>處理後的水質</h4>
                <p>• 水分子活化、微小化,水分子團由110Hz降為66.8Hz。<br />
                    • 帶氧量提升40%，不易滋生厭氧菌。<br />
                    • 表面張力減小，幫助新陳代謝。<br />
                    • 有效提高水利用率。<br />
                    • 來水氮含量可減少67%(由0.6mg/降至0.2mg/L)。<br />
                    • 過濾型改善自來水品質、濾除雜質懸浮物、降低濁度。
                </p>
            </div>
            <div className="right" style={{ order: -1, flex: "0 0 60%", alignSelf: "center" }}>
                <img src={require("../../../img/equipment/webp/009-sewage-bg.webp").default} style={{ width: "85%", height: "auto", marginLeft: "-8vw" }} />

            </div>
            <img src={require("../../../img/equipment/svg/007-chang-gung.svg").default} style={{ position: "absolute", right: "2vw", top: "2vw", width: "12vw", height: "auto" }} />
        </section>
    )
}
