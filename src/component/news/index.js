import React, { useRef, useLayoutEffect } from 'react'
import { Population, Image } from './newsElement';
import FancyBox from '../config/fancyBox';
import { gsap } from 'gsap';
const requireSvg = require.context("../../../img/news/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/news/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireNewsElementWebp = require.context("../../../img/news/newsElement/webp", false, /^\.\/.*\.webp$/);
const newsWebp = requireNewsElementWebp.keys().map(requireNewsElementWebp);
export default function News() {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ delay: 0.6 })
            gg.from(".listBox .num", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }).from(".listBox img", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "<+0.3").from(".listBox p", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "<+0.3").to("svg path", {
                strokeDashoffset: 0,
                duration: 6,
            }, "<+0.5")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <>
            <section className='news' ref={animateRef}>
                <div className="left">
                    <div className="titleBox">
                        <h1>NEWS</h1>
                    </div>
                    <div className="list">
                        <ListBox num={"01."} text={"貸款限制"} />
                        <ListBox num={"02."} text={"重購退稅"} />
                        <ListBox num={"03."} text={"房地合一稅"} />
                        <ListBox num={"04."} text={"大社區優點"} />
                        <ListBox num={"05."} text={"預計通行捷運"} />
                        <ListBox num={"06."} text={"最強人口結構"} element={<Population />} />
                        <ListBox num={"07."} text={"林口學區設籍"} element={<Image url={newsWebp[2].default} />} />
                    </div>
                </div>
                <div className="right">
                    <img src={webp[0].default} />
                </div>
            </section>

        </>

    )
}


function ListBox({ num, text, element }) {

    return (
        <div className="listBox" >
            <div className="num">
                <h3>{num}</h3>
            </div>
            <div className="box">
                <img src={svg[1]} />
                <p>{text}</p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208.5 173.5"
            >
                <g >
                    <path
                        fill='none' stroke='#999' strokeMiterlimit={10} strokeWidth={".5px"}
                        d="M158.78,.25h31.23c10.07,0,18.24,8.17,18.24,18.24V155.01c0,10.07-8.17,18.24-18.24,18.24H18.49c-10.07,0-18.24-8.17-18.24-18.24V18.49C.25,8.42,8.42,.25,18.49,.25h30.48"
                    />
                </g>
            </svg>
            <FancyBox>
                {element}
            </FancyBox>
        </div>
    )
}