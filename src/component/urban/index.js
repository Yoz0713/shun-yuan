import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
const requireindexSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const indexSvg = requireindexSvg.keys().map(requireindexSvg);
const requireSvg = require.context("../../../img/urban/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/urban/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function Urban() {
    const [showDot, setShowDot] = useState(false)
    const animateRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".urban-left", {
                opacity: 0,
                y: 35,
                duration: 1.4
            }).from(".urban-right .title-box", {
                opacity: 0,
                x: 35,
                duration: 1
            }, "<+0.3").from(".urban-right .paraBox", {
                opacity: 0,
                x: 35,
                duration: 1
            }, "<+0.5").from(".urban-right .nav li", {
                opacity: 0,
                y: 35,
                duration: 1
            }, "<+0.5").from(".urban-right li > :nth-child(2)", {
                color: "#66666600",
                marginLeft: "40px",
                duration: 0.8,
                stagger: 0.3
            }, "<+0.5")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='urban' ref={animateRef}>
            <div className="urban-left">
                <UrbanBg showDot={showDot} />
            </div>
            <div className="urban-right">
                <UrbanPara showDot={showDot} setShowDot={setShowDot} />
            </div>

        </section>
    )
}

function UrbanBg({ showDot }) {
    //托拽縮放
    const [scaleRatio, setScaleRatio] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [flag, setFlag] = useState(false);
    const [init, setInit] = useState({ x: 0, y: 0 })
    const dragTarget = useRef(null)
    //anchor dot

    const zoomIn = () => {
        setScaleRatio(1.5);
        setX(dragTarget.current.clientWidth / 2.6);
        setY(-dragTarget.current.clientHeight / 10);
    }
    const zoomOut = () => {
        setScaleRatio(1);
        setX(0);
        setY(0);
    }

    const onMouseMove = (e) => {
        e.preventDefault();

        if (flag && scaleRatio == 1.5) {
            setX(e.pageX - (init.x));
            setY(e.pageY - (init.y));
        }


    }
    const onMouseDown = (e) => {
        setFlag(true);
        setInit({
            x: e.pageX - dragTarget.current.offsetLeft,
            y: e.pageY - dragTarget.current.offsetTop
        })
    }
    const onMouseUp = (e) => {
        setFlag(false)

    }
    return (
        <div className="urban-bg">
            <div className="imgBox" onMouseDown={onMouseDown}
            >
                <div className="box"
                    ref={dragTarget}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    style={{ transform: `scale(${scaleRatio})`, left: `${x}px`, top: `${y}px`, transition: flag ? "none" : "0.6s" }}>
                    <img src={svg[0].default} />
                    <AnchorDotTransportation showDot={showDot} />
                    <AnchorDotConstruction showDot={showDot} />
                    <AnchorDotNationSchool showDot={showDot} />
                    <AnchorDotQualitySchool showDot={showDot} />
                    <AnchorDotEnvironment showDot={showDot} />
                </div>

            </div>
            <div className="zoom">
                <img src={svg[1]} onClick={zoomIn} style={{ filter: scaleRatio == 1.5 ? "brightness(0.8) grayscale(100%)" : "none" }} />
                <img src={svg[2]} onClick={zoomOut} style={{ filter: scaleRatio == 1 ? "brightness(0.8) grayscale(100%)" : "none" }} />
            </div>
        </div>
    )
}

function UrbanPara({ showDot, setShowDot }) {

    return (
        <div className="urban-para">
            <div className="title-box" >
                <img src={indexSvg[3]} />
                <h3>URBAN<br />PLANNING</h3>
            </div>
            <div className="paraBox">
                <p>【CLASSY HOME】位於林口繁華核心、科技智慧的結合，可望吸引逾千家潛力企業進駐，產業群聚效應將帶來更多廠商進駐與就業機會，衍生大量商辦與住宅需求，且校園比鄰、國際學城聚落。</p>
            </div>
            <SectionNav setShowDot={setShowDot} showDot={showDot} />
        </div>
    )
}


function SectionNav({ showDot, setShowDot }) {
    let team = [{
        id: 1,
        ch: "大眾運輸系統",
        en: "EXPRESS TRANSPORTATION",
        name: "transportation"
    }, {
        id: 2,
        ch: "重大建設",
        en: "MAJOR CONSTRUCTION",
        name: "construction"
    }, {
        id: 3,
        ch: "國際學校",
        en: "INTERNATIONAL SCHOOL",
        name: "nationSchool"
    }, {
        id: 4,
        ch: "優質學校",
        en: "QUALITY SCHOOL",
        name: "qualitySchool"
    }, {
        id: 5,
        ch: "周邊環境",
        en: "SURROUNDING ENVIRONMENT",
        name: "environment"
    },]
    console.log(showDot)
    return (
        <div className="section-nav">
            <ul className="nav">
                {team.map((item, i) => {
                    return <li
                        key={item.id}
                        onClick={() => setShowDot(item.name)}
                    >
                        <p style={{ color: showDot == item.name ? "#c2a357" : "#666666" }}>{item.ch}</p>
                        <p style={{ color: showDot == item.name ? "#c2a357" : "#666666" }}>{item.en}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

function AnchorDotTransportation({ showDot }) {

    return (
        <div className="transportation" style={{ opacity: showDot == "transportation" ? 1 : 0, pointerEvents: showDot == "transportation" ? "auto" : "none" }}>
            {[...Array(3)].map((item, i) => <div className='dot' key={i}> <img src={svg[3].default} /></div>)}
        </div>
    )
}

function AnchorDotConstruction({ showDot }) {

    return (
        <div className="construction" style={{
            opacity: showDot == "construction" ? 1 : 0,
            pointerEvents: showDot == "construction" ? "auto" : "none"
        }}>
            {[...Array(4)].map((item, i) => <div className='dot' key={i}> <img src={svg[3].default} /></div>)}
        </div>
    )
}

function AnchorDotNationSchool({ showDot }) {
    let images = [
        {
            id: 1,
            img: webp[0].default
        },
        {
            id: 2,
            img: webp[1].default
        },
        {
            id: 3,
            img: webp[2].default
        },
        {
            id: 4,
            img: webp[3].default
        },
        {
            id: 5,
            img: webp[4].default
        }, {
            id: 6,
            img: webp[5].default
        }
        , {
            id: 7,
            img: webp[6].default
        }
    ]
    return (
        <div className="nationSchool" style={{ opacity: showDot == "nationSchool" ? 1 : 0, pointerEvents: showDot == "nationSchool" ? "auto" : "none" }}>
            {images.map((item, i) => <div className='dot' key={i}>
                <img src={svg[3].default} />
                <div className='imgBox'>
                    {item.img ? <img src={item.img} /> : null}
                </div>
            </div>)}
        </div>
    )
}

function AnchorDotQualitySchool({ showDot }) {

    return (
        <div className="qualitySchool" style={{ opacity: showDot == "qualitySchool" ? 1 : 0, pointerEvents: showDot == "qualitySchool" ? "auto" : "none" }}>
            {[...Array(7)].map((item, i) => <div className='dot' key={i}> <img src={svg[3].default} /></div>)}
        </div>
    )
}

function AnchorDotEnvironment({ showDot }) {

    return (
        <div className="environment" style={{ opacity: showDot == "environment" ? 1 : 0, pointerEvents: showDot == "environment" ? "auto" : "none" }}>
            {[...Array(6)].map((item, i) => <div className='dot' key={i}> <img src={svg[3].default} /></div>)}
        </div>
    )
} 