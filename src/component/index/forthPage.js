import React from 'react'
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
function ForthPage({ reduxState }) {
    const animateScope = useRef(null)
    const [animate, setAnimate] = useState(false)
    useLayoutEffect(() => {
        let ctx;
        let gg;
        ctx = gsap.context(() => {
            gg = gsap.timeline()
            gg.from(".forth-page-bg > :nth-child(1)", {
                opacity: 0,
                duration: 3,
            }).to(".forth-page-bg :nth-child(2)", {
                WebkitMaskSize: "100% 500%",
                duration: 8,
            }, "<+1")
        }, [animateScope])

        return () => ctx.revert()
    }, [animate]);
    useEffect(() => {
        if (reduxState == 3) {
            setAnimate(!animate)
        }
    }, [reduxState]);
    return (
        <section className="forth-page" ref={animateScope}>
            <ForthPageBg />
            <ForthPagePara />
        </section>
    )
}
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide,
    }

}, null)(ForthPage)
function ForthPageBg() {
    return (
        <div className="forth-page-bg">
            <img src={svg[7]} />
            <div className="imgBox">
                <img src={webp[13].default} />
                {/* <span className='sampleText'>情境示意圖</span> */}
            </div>

        </div>
    )
}

function ForthPagePara() {
    return (
        <div className="forth-page-para" style={{ marginTop: "3.5vw" }}>
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>CONSTRUCTION<br />FLOOR</h3>
            </div>
            <div className="paraBox">
                <p>現代簡約造型風格，講究沈穩優雅品味，深淺色系建材運用及垂直線條分割，增加立面高聳感，適度調和深淺色調搭配，產生層次感。</p>
                <SectionNav />

            </div>
        </div>
    )
}


function SectionNav({ handleClick }) {
    let item = [{
        id: 1,
        ch: "建築外觀",
        en: "BUILDING EXTERIOR",
        url: "/product/exterior"
    }, {
        id: 2,
        ch: "樓層規劃",
        en: "FLOOR PLAN",
        url: "12"
    }, {
        id: 3,
        ch: "全區平面圖",
        en: "MASTER PLAN",
        url: "12"
    }, {
        id: 4,
        ch: "植栽規劃",
        en: "LANDSCAPE DESIGN",
        url: "/product/planet"
    }, {
        id: 5,
        ch: "森Mori Café",
        en: "MORI CAFE",
        url: "/product/cafe"
    },]
    return (
        <div className="section-nav">
            <ul className="nav" style={{ width: "100%", margin: "1.2vw 0 0" }}>
                {item.map((item, i) => {
                    return (
                        <Link to={item.url} key={item.id}>
                            <li className={`team${i + 1}`}>
                                <p>{item.ch}</p><p>{item.en}</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}