import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HomeThirdPageCover } from "../config/svgCollection"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Import animation libary
import { gsap } from "gsap";
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirePng = require.context("../../../img/index/png", false, /^\.\/.*\.png$/);
const png = requirePng.keys().map(requirePng);


function ThirdPage({ reduxState }) {
    const [change, setChange] = useState(0)
    const slide = useRef(null)
    const animate = useRef(null)
    let count;
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            let gg;
            if (reduxState === 2) {

                gg = gsap.timeline({
                    yoyo: true,
                    repeat: 1,
                    repeatDelay: 1,
                    ease: 'power3.out',
                })

                gg.fromTo(".imgBox img", {
                    scale: 1.2,
                }, {
                    scale: 1,
                    duration: 3
                }).fromTo(`.home-third-clip polygon:nth-child(odd)`, {
                    opacity: 1,
                }, {
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.02,
                }, "<").fromTo(`.home-third-clip polygon:nth-child(even)`, {
                    opacity: 1,
                }, {
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.02,
                }, "<").then(() => {
                    if (slide.current) {
                        if (change >= 0 && change < slide.current.children.length - 1) {
                            count = change
                            count++
                            setChange(count)
                        } else {
                            setChange(0)
                        }
                    }

                })
            }


        }, [animate])
        return () => {
            setTimeout(() => {
                ctx.revert()
            }, 300)
        }

    }, [change, reduxState])


    return (
        <section className="third-page" ref={animate}>
            <SectionNav />
            <div className="third-page-bg">
                <SvgCover />

                <div className="imgBox" ref={slide}>
                    <div className="box" style={{ display: change == 0 ? "block" : "none" }} >
                        <img src={webp[10].default} />
                        {/* <span className='sampleText'>情境式意圖</span> */}
                    </div>
                    <div className="box" style={{ display: change == 1 ? "block" : "none" }}>
                        <img src={webp[11].default} />
                        {/* <span className='sampleText'>情境式意圖</span> */}
                    </div>
                    <div className="box" style={{ display: change == 2 ? "block" : "none" }}>
                        <img src={webp[12].default} />
                        {/* <span className='sampleText'>情境式意圖</span> */}
                    </div>


                </div>
            </div>


        </section>
    )
}
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide,
    }

}, null)(ThirdPage)

function SectionNav({ handleClick }) {
    let item = [{
        id: 1,
        ch: "實景空拍",
        en: "AERIAL VIEWS"
    }, {
        id: 2,
        ch: "都市計畫",
        en: "URBAN PLANNING"
    },]
    return (
        <div className="section-nav">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>LOCATION<br />LIFE</h3>
            </div>
            <ul className="nav">
                {item.map((item, i) => {
                    if (i == 0) {
                        return <Link to={"lifefunction"} key={item.id}>
                            <li className={`team${i + 1}`} onClick={handleClick}>
                                <p >{item.ch}</p><p>{item.en}</p>
                            </li>
                        </Link>
                    } else {
                        return <Link to={"urban"} key={item.id}>
                            <li className={`team${i + 1}`} onClick={handleClick}>
                                <p >{item.ch}</p><p>{item.en}</p>
                            </li>
                        </Link>
                    }

                })}
            </ul>
        </div>
    )
}

function SvgCover() {
    return (
        <div className="svg-cover">
            <HomeThirdPageCover />
        </div>
    )
}