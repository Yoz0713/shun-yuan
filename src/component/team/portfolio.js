import React, { useState, useLayoutEffect, useRef } from 'react'
import { Pdf } from '../pdf/Pdf';
import gsap from 'gsap';
import RunNumber from '../config/runNumber';
const requireWebp = require.context("../../../img/team/coporation/portfolio/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/coporation/portfolio/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Portfolio() {
    const [active, setActive] = useState(false)
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline();
            gg.from(".slice-bg img", {
                y: 20,
                opacity: 0,
                duration: 1.2,
                stagger: 0.4
            }).from(".square-bg img", {
                y: -50,
                opacity: 0,
                duration: 1.2,
            }, "<+0.6").from(".right .title h3", {
                x: 50,
                opacity: 0,
                duration: 0.8,
            }, "<").from(".right .para p", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3
            }, "<+0.3").from(".right .imgBox", {
                y: 50,
                opacity: 0,
                duration: 0.8,
            }, "<+0.6").from(".total .case p", {
                y: 30,
                opacity: 0,
                duration: 0.8,
            }, "<+0.3").from(".total .household p", {
                y: "5vw",
                opacity: 0,
                duration: 0.8,
            }, "<+0.3").from(".total img", {
                y: "5vw",

                duration: 0.8,
                stagger: 0.3
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <>
            <section className="portfolio" ref={animateRef}>
                <div className="left">
                    <div className="slice-bg">
                        <img src={webp[0].default} />
                        <img src={webp[1].default} />
                        <img src={webp[2].default} />
                    </div>
                    <div className="square-bg">
                        <img src={svg[0].default} />
                    </div>
                    <div className="more" onClick={() => setActive(true)}>
                        <p>更多業績</p>
                    </div>
                </div>
                <div className="right">
                    <div className="paraBox">
                        <div className="title">
                            <h3>堅持自我建築理念 成就完美產品規劃</h3>
                        </div>
                        <div className="para">
                            <p>森聯握有的庫存土地，將於有計劃之情況下，設計出具有特殊建築、綠化環保、節能標準等理念之美好空間，並提升住戶生活品味。</p>
                            <p>累積四十年品牌，總案量已超過一萬八千戶以上。在大台北地區開枝散葉，共創一片生生不息的建築森林。</p>
                        </div>
                    </div>
                    <div className="imgBox">
                        <img src={webp[3].default} />
                        <p className='taipei'>台北<RunNumber target={4} speed={90} delay={1800} />案</p>
                        <p className='newTaipei'>新北<RunNumber target={67} speed={15} delay={2000} />案</p>
                        <p className='taoyuan'>桃園<RunNumber target={21} speed={40} delay={2200} />案</p>
                    </div>
                </div>
                <div className="total">
                    <div className="case">
                        <p>全台共</p>
                        <img src={svg[1]} />
                        <p>案</p>
                    </div>
                    <div className="household">
                        <p>累計</p>
                        <img src={svg[2]} />
                        <p>戶</p>
                    </div>
                </div>
            </section>
            <Pdf url={"./portfolio.pdf"} active={active} setActive={setActive} />
        </>

    )
}
