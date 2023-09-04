import React from 'react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../config/svgCollection';
import SectionNav from '../layout/sectionNav';
import CloudEffect from '../config/cloudEffect';

function SecondPage() {
    const secondPage = useRef();
    const [type, setType] = useState("type1")
    const team = {
        title: "BRAND\nCONCEPT",
        data: [{
            type: "type1",
            ch: "品牌理念",
            en: "BRAND CONCEPT"
        }, {
            type: "type2",
            ch: "順億營造",
            en: "CONSTRUCTION METHOD"
        }, {
            type: "type3",
            ch: "建築團隊",
            en: "BUILDING TEAM"
        }]
    }

    const handleClick = ((e) => {
        setType(e.target.className)
    })

    return (
        <section className="second-page" ref={secondPage}>
            <CoverLogo type={type} />
            <SectionNav handleClick={handleClick} data={team} type={type} />
        </section>
    )
}

export default SecondPage;

function CoverLogo({ type }) {
    const swiperState = useSelector(state => state.slideReducer.slide)
    return (
        <div className="cover-logo">
            <Link to={"/team/coporation/sunland"} className='type1' style={{ opacity: type === "type1" ? 1 : 0, pointerEvents: type === "type1" ? "auto" : "none" }}>
                <BrandLogo />
                <div className="box">
                    <img src={require("/img/index/webp/006-brand-bg.webp").default} />
                </div>
            </Link>
            <Link to={"/team/coporation/sunland"} className='type2' style={{ opacity: type === "type2" ? 1 : 0, pointerEvents: type === "type2" ? "auto" : "none" }}>

                <CloudEffect start={type === "type2" && swiperState === 1}>
                    <img src={require("/img/index/webp/003-second-page-team2.webp").default} style={{ opacity: (type === "type2" && swiperState === 1) ? 1 : 0, transition: "opacity 4.7s" }} />
                </CloudEffect>

            </Link>
            <Link to={"/team/coporation/sunland"} className='type3' style={{ opacity: (type === "type3" && swiperState === 1) ? 1 : 0, pointerEvents: type === "type3" ? "auto" : "none" }}>
                <CloudEffect start={type === "type3" && swiperState === 1}>
                    <img src={require("/img/index/webp/004-second-page-team3.webp").default} style={{ opacity: type === "type3" ? 1 : 0, transition: "opacity 4.7s" }} />
                </CloudEffect>
            </Link>
        </div>
    )
}
