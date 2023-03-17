import React, { useEffect } from 'react'
import { useLayoutEffect, useRef } from 'react';
// Import animation libary
import { gsap } from "gsap";
import Glow from '../config/glow';
const requireLayoutSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const layoutSvg = requireLayoutSvg.keys().map(requireLayoutSvg);
const requireSvg = require.context("../../../img/lifefunction/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/lifefunction/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirepng = require.context("../../../img/lifefunction/png", false, /^\.\/.*\.png$/);
const png = requirepng.keys().map(requirepng);
function LifeFunction({ setTransistionStage }) {

    return (
        <>
            <AerialImage setTransistionStage={setTransistionStage} />

        </>

    )
}


export default React.memo(LifeFunction);

function AerialImage({ setTransistionStage }) {
    const animateRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".logo .glow", {
                scaleY: 0,
                duration: 1.8
            }).from(".logo > img", {
                opacity: 0,
                duration: 1
            }, "<+1.5")
        }, animateRef)
        return () => ctx.revert()
    }, [])
    return (
        <div className="life-function" ref={animateRef}>
            <Cloud />
            <LogoBox />
            <img src={webp[0].default} className="banner-bg" onLoad={() => setTransistionStage("fadeIn")} />
        </div>
    )
}

// function AerialPara(props) {

//     return (
//         <div className="paraBox" style={{ marginRight: props.mr }}>
//             <p>
//                 {props.children}
//             </p>
//             <div className="line" style={{ height: props.height }}></div>
//         </div>
//     )
// }
function LogoBox() {

    return (
        <div className="logo">
            <img src={layoutSvg[4].default} />
            <Glow number={40} color={"#fff"} />

        </div>
    )
}

function Cloud() {
    return (
        <div className="cloud">
            <img src={png[0].default} style={{ width: "80%", opacity: 0.1, animationDuration: "600s", left: "80%" }} />
            <img src={png[0].default} style={{ width: "40%", opacity: 0.2, animationDuration: "500s", left: "50%" }} />
            <img src={png[0].default} style={{ width: "20%", opacity: 0.4, animationDuration: "300s" }} />
            <img src={png[0].default} style={{ width: "60%", opacity: 0.2, animation: "none", left: "5%", transform: "rotateY(180deg)", top: "8vw" }} />
        </div>
    )
}



