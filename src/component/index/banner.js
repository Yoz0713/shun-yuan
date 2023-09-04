import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Video from "/video/banner-cloud.mp4";
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
// const require1x = require.context("../../../img/index/1x", false, /^\.\/.*\.png$/);
// const x = require1x.keys().map(require1x);


//Banner組件
export default function Banner() {
    const banner = useRef();
    const videoRef = useRef(null)
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.8;
    };

    return (
        <section className='banner' ref={banner}>
            <div className="imgBox">
                <img src={webp[0].default} />
            </div>
            <div className="logoBox">
                <img src={require("../../../img/index/svg/logo.svg").default} />
            </div>
            {/* <img src={webp[5].default} className="cloud cloud1" />
            <img src={webp[5].default} className="cloud cloud2" /> */}
            <video ref={videoRef}
                src={Video}
                style={{ position: "absolute", left: 0, top: 0, zIndex: 10, pointerEvents: "none", mixBlendMode: "screen", width: "100%", height: "100%", objectFit: "cover" }}
                onCanPlay={() => { setPlayBack() }}
                autoPlay
                muted
                playsInline
                loop
            ></video>
        </section>

    )
}
