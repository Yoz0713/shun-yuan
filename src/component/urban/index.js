import React, { useRef, useState } from 'react'
import gsap from 'gsap';
const requireindexSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const indexSvg = requireindexSvg.keys().map(requireindexSvg);
const requireSvg = require.context("../../../img/urban/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Urban() {
    return (
        <section className='urban'>
            <div className="urban-left">
                <UrbanBg />
            </div>
            <div className="urban-right">
                <UrbanPara />
            </div>

        </section>
    )
}

function UrbanBg() {
    const [scaleRatio, setScaleRatio] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [flag, setFlag] = useState(false);
    const [init, setInit] = useState({ x: 0, y: 0 })
    const dragTarget = useRef(null)
    const zoomIn = () => {
        setScaleRatio(1.5);
        setX(dragTarget.current.clientWidth / 3.5);
        setY(-dragTarget.current.clientHeight / 10);
    }
    const zoomOut = () => {
        setScaleRatio(1);
        setX(0);
        setY(0);
    }

    const onMouseMove = (e) => {
        e.preventDefault();
        console.log(x, y)
        if (flag && scaleRatio == 1.5) {
            setX(e.pageX - (init.x));
            setY(e.pageY - (init.y));
        }


    }
    const onMouseDown = (e) => {
        setFlag(true);
        console.log(x, y)
        setInit({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
    }
    const onMouseUp = (e) => {
        setFlag(false)

    }
    return (
        <div className="urban-bg">
            <div className="imgBox"
            >
                <div className="box"
                    ref={dragTarget}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    style={{ transform: `scale(${scaleRatio})`, left: `${x}px`, top: `${y}px` }}>
                    <img src={svg[0].default} />
                </div>

            </div>
            <div className="zoom">
                <img src={svg[1]} onClick={zoomIn} style={{ filter: scaleRatio == 1.5 ? "brightness(0.8) grayscale(100%)" : "none" }} />
                <img src={svg[2]} onClick={zoomOut} style={{ filter: scaleRatio == 1 ? "brightness(0.8) grayscale(100%)" : "none" }} />
            </div>
        </div>
    )
}

function UrbanPara() {
    return (
        <div className="urban-para">
            <div className="title-box" >
                <img src={indexSvg[3]} />
                <h3>URBAN<br />PLANNING</h3>
            </div>
            <div className="paraBox">
                <p>【CLASSY HOME】位於林口繁華核心、科技智慧的結合，可望吸引逾千家潛力企業進駐，產業群聚效應將帶來更多廠商進駐與就業機會，衍生大量商辦與住宅需求，且校園比鄰、國際學城聚落。</p>
            </div>
            <SectionNav />
        </div>
    )
}


function SectionNav({ handleClick }) {
    let team = [{
        id: 1,
        ch: "大眾運輸系統",
        en: "EXPRESS TRANSPORTATION"
    }, {
        id: 2,
        ch: "重大建設",
        en: "MAJOR CONSTRUCTION"
    }, {
        id: 3,
        ch: "國際學校",
        en: "INTERNATIONAL SCHOOL"
    }, {
        id: 4,
        ch: "優質學校",
        en: "QUALITY SCHOOL"
    }, {
        id: 5,
        ch: "周邊環境",
        en: "SURROUNDING ENVIRONMENT"
    },]
    return (
        <div className="section-nav">
            <ul className="nav">
                {team.map((item, i) => {
                    return <li key={item.id} className={`team${i + 1}`} onClick={handleClick}><p >{item.ch}</p><p>{item.en}</p></li>
                })}
            </ul>
        </div>
    )
}