import React, { useEffect } from 'react'
import { useLayoutEffect, useRef } from 'react';
// Import animation libary
import { gsap } from "gsap";
import Glow from '../config/glow';
import FancyBox from "../config/fancyBox"
import BasicContent from "../config/basicContent"
import preloadImage from '../config/preload';
const requireLayoutSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const layoutSvg = requireLayoutSvg.keys().map(requireLayoutSvg);
const requireSvg = require.context("../../../img/lifefunction/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/lifefunction/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirepng = require.context("../../../img/lifefunction/png", false, /^\.\/.*\.png$/);
const png = requirepng.keys().map(requirepng);
function LifeFunction() {

    return (
        <>
            <AerialImage />

        </>

    )
}


export default React.memo(LifeFunction);

function AerialImage() {
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
            <img src={webp[0].default} className="banner-bg" />
            <AnchorSpot />
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

function AnchorSpot() {
    const para = [{
        img: webp[2].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `新興AI科技園`,
        para2: `數位媒體、OTT影音串流虛擬實境、AI新創、尖端醫療…全球趨勢產業匯聚，世界半導體霸主ASML艾司摩爾投資規模達300億為史上最大在台投資案，吸引跨國科技人才，融合工作、生活、休閒、創富，林口一路領先全國。`
    }, {
        img: webp[3].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `昕境廣場-國賓影城`,
        para2: `「林口昕境國賓影城」擁有8個國際級影廳，配備Dolby® Atmos™ 杜比®全景聲音響系統‧環境音場震撼清晰、無與倫比，感受全新立體音感。 尊爵席配備舒適寬敞的人體工學沙發座椅，可調整為橫躺的舒適設計，貼心尊榮的禮賓服務，讓看電影不僅是單純的娛樂，更昇華為享受。`,
    }, {
        img: webp[4].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `扶輪公園`,
        para2: `扶輪公園座落林口區南勢里，南北向接文化二、三路，西臨忠孝路，公園面積 : 23,520平方公尺，於2005年2月23日啟用，為一處可倘佯、散步、運動附有綠化設施的開放活動空間。`,
    }, {
        img: webp[0].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `郵政物流園區`,
        para2: `佔地17.14公頃，規劃興建郵政物流中心、北台灣郵件作業中心、郵政資訊中心、郵政訓練中心及工商服務中心等5棟建物。\n各項重要工程於2018年6月陸續開工將興建大賣場、旅館等設施，創造6000個就業機會，也能帶動週邊產業發展，郵政物流中心預估於110年底完工、郵政資訊中心預估於111年8月完工、北台灣郵件作業中心及訓練中心預估於113年6月完工、工商服務中心於去年12月31日公告招商，順利決標後預定於113年底完工。全區預計114年啟用營運。`,

    }, {
        img: webp[5].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `三井Outlet二期`,
        para2: `林口三井Outlet是日商三井不動產集團在台商業設施開發首案，一期已有220 間店鋪，二期工程完工後總店鋪將達 310 間，同時強化數位科技導入館內的娛樂、健身等服務，成為北台灣最大規模的購物商城。 `,

    }, {
        img: webp[6].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `東森媒體總部`,
        para2: `林口第一新地標！2.16公頃基地規劃地下4層、地上38層樓企業營運總部及6層樓的文創生活與多功能展演中心，並與晶華國際酒店共同成立「Silks X 晶英薈旅」，創造影視娛樂產業生活圈，國際媒體嶄新的示範場域。`,

    },]
    useEffect(() => {
        para.forEach((item) => {
            preloadImage(item.img)
        })

    }, [])
    return (
        <div className="anchor">
            {
                [...Array(6)].map((item, i) => {
                    return (
                        <div className={`anchor-spot anchor-spot${i + 1}`}>
                            <FancyBox>
                                <BasicContent para={para[i]} />
                            </FancyBox>
                        </div>
                    )

                })
            }
        </div>
    )
}


