import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import FancyBox from '../config/fancyBox';
import BasicContent from '../config/basicContent';
import ScaleDrag from '../config/scaleDrag';
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
                bottom: -30,
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
    return (
        <div className="urban-bg">
            <ScaleDrag zoomImg1={svg[1]} zoomImg2={svg[2]} maxRatio={1.5} init={{ x: "30vw", y: "-8vw" }}>
                <img src={svg[0].default} />
                <AnchorDotTransportation showDot={showDot} />
                <AnchorDotConstruction showDot={showDot} />
                <AnchorDotNationSchool showDot={showDot} />
                <AnchorDotQualitySchool showDot={showDot} />
                <AnchorDotEnvironment showDot={showDot} />
            </ScaleDrag>

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
    const [scale, setScale] = useState(1);
    const zoomIn = () => {
        setScale(1.5);
    }
    const zoomOut = () => {
        setScale(1);
    }
    const para = [{
        img: webp[13].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `台北雙子星`,
        para2: `2022年11月正式開工，預估可提供1.6萬個就業機會、每年創造千億元以上經濟產值，預計2027年完工。規劃有新型態全客群購物中心、高端奢華星級飯店、智慧科技打造超A級商辦、360天際線觀景台、城市美術展覽館及低層裙樓的市民新生活場域，包含公益客廳與交六、交八廣場，共計6大亮點。`
    }, {
        img: webp[14].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `CITYLINK商場`,
        para2: `捷運三重站共構百貨商場為新北第一座CITYLINK，預計2024年完工，地上1~2層，面積約1,974坪，潮牌服飾、時尚精品、異國料理美食，就近享受國際好品味。\n複製南港站模式，導入連鎖商店與蔦屋書店。`,
        nav: {
            navText: ["CITYLINK商場", "新北都會公園"],
            img: webp[15].default,
            title: `EXPRESS TRANSPORTATION`,
            para1: `新北都會公園`,
            para2: `全臺灣最大河濱公園424公頃的「大臺北都會公園」（約16個大安森林公園面積）`,
        }
    }, {
        img: webp[16].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `新莊北側知識產業園區`,
        para2: `新北市政府積極招商，企業總部林立，預計提供超過近10000個工作機會。而此區除了聚集金融、新創外，還包含先鋒科技、貝斯美德、科定企業、台通光電等，而知名時尚精品夏姿時尚營運總部也將座落於此，除為園區產業注入文創元素外，也將創造更多當地就業機會。\n捷運新北產業園區站招商，打造7000坪共構大樓，可興建地上16層、地下3層商辦大樓。開發完成後，預計將可增加約400餘個就業機會。`,
        style: "opposite"
    }, {
        img: webp[17].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `郵政物流園區`,
        para2: `佔地17.14公頃，規劃興建郵政物流中心、北台灣郵件作業中心、郵政資訊中心、郵政訓練中心及工商服務中心等5棟建物。\n各項重要工程於2018年6月陸續開工將興建大賣場、旅館等設施，創造6000個就業機會，也能帶動週邊產業發展，郵政物流中心預估於110年底完工、郵政資訊中心預估於111年8月完工、北台灣郵件作業中心及訓練中心預估於113年6月完工、工商服務中心於去年12月31日公告招商，順利決標後預定於113年底完工。全區預計114年啟用營運。`,

    }, {
        img: webp[18].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `桃園航空城`,
        para2: `四十年來最大國家建設計畫，投資總額超過5000億，特定區:4564.32公頃、區段徵收開發面積:3151公頃，預計增加30 萬個就業機會。`,

    },]
    const linKouPara = {
        img: webp[19].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `林口轉運站`,
        para2: `新北市交通局為了因應當地居民和未來媒體園區的需求，特別興建了一座占地8,800平方公尺的公車轉運站，站內提供9席公車站區和16席電動公車駐車區，成為林口地區的大眾運輸轉運中心，也是當地居民和未來媒體園區的重要交通樞紐。\n此外，在林口轉運站之外，還有桃園長庚轉運站，這座公車轉運站將引領城市嶄新面貌的到來，打造更便捷、綠色、舒適的城市交通環境。`,
    }
    const interChangePara = {
        img: webp[20].default,
        title: `EXPRESS TRANSPORTATION`,
        para1: `國道1號林口交流道改善工程`,
        para2: `距離台北市區20公里，經國道1號，約25分鐘抵達台北市區。目前雙交流道，但因應林口區人口急速成長，將針對國道1號林口交流道，進行改善工程，預計2027年完工通車。`,
    }
    return (
        <div className="transportation" style={{ opacity: showDot == "transportation" ? 1 : 0, pointerEvents: showDot == "transportation" ? "auto" : "none" }}>
            {[...Array(3)].map((item, i) => {
                if (i == 0) {
                    return (
                        <div className='dot' key={i}>
                            <FancyBox thumbUrl={svg[3].default} >
                                <div className="mrt">
                                    <div className="mrt-route">
                                        <img src={svg[4].default} />
                                        {para.map((item, i) => {

                                            return (

                                                <div key={i} className={`spot-anchor${i + 1}`}>
                                                    <FancyBox>
                                                        <BasicContent para={para[i]} />
                                                    </FancyBox>
                                                </div>
                                            )


                                        })}

                                    </div>
                                    <div className="mrt-map">
                                        <FancyBox text={"台北捷運圖"} >
                                            <div className="mrt">
                                                <div className="taipei-mrt-route">
                                                    <ScaleDrag zoomImg1={svg[1]} zoomImg2={svg[2]} init={{ x: "25vw", y: "-40vw" }}>
                                                        <img src={webp[12].default} />
                                                    </ScaleDrag>

                                                </div>
                                            </div>

                                        </FancyBox>

                                    </div>
                                </div>

                            </FancyBox>
                        </div>
                    )
                } else {
                    return (
                        <div className='dot' key={i}>
                            <FancyBox thumbUrl={svg[3].default} >
                                <BasicContent para={i == 1 ? linKouPara : interChangePara} />
                            </FancyBox>
                        </div>
                    )
                }

            }
            )}
        </div>
    )
}

function AnchorDotConstruction({ showDot }) {
    const para = [{
        img: webp[7].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `新興AI科技園`,
        para2: `數位媒體、OTT影音串流虛擬實境、AI新創、尖端醫療…全球趨勢產業匯聚，世界半導體霸主ASML艾司摩爾投資規模達300億為史上最大在台投資案，吸引跨國科技人才，融合工作、生活、休閒、創富，林口一路領先全國。`
    }, {
        img: webp[9].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `國家檔案館`,
        para2: `「建立國家級建設」為主軸，預計在 2024 年完工；規劃規模為地上10層、地下2層，樓地板面積約14,834坪，興建目的在滿足未來20年所需100公里典藏容量空間，並同步建置多元服務、技術研發等空間，提供開放應用及教育推廣等各項服務。`
    }, {
        img: webp[8].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `林口新創園區`,
        para2: `為鼓勵臺灣新創接軌國際、促進國際新創交流，經濟部中小企業處將台北世界大學運動會選手村場域活化為林口新創園。本聚落將提供新創辦公室、住宿空間、共同工作空間及展演空間等設施，並廣邀特色商店及國際級加速器和育成中心進駐，結合鄰近產業供應鏈及場域實證空間，期能成為國際新創來臺發展的最佳場域。`
    }, {
        img: webp[10].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `105市道改善工程`,
        para2: `為滿足目標年交通量需求規劃雙向各2車道，工程起點為八里區長坑國小南側，工程終點為林口高爾夫球場，道路開闢長度為2.46公里，完工後將解決既有蜿蜒路線不符合大型車輛運轉軌跡之規範問題，提供安全舒適之行車環境，確保道路安全及提升整體區域路網。`
    }, {
        img: webp[11].default,
        title: `MAJOR CONSTRUCTION`,
        para1: `元智大學`,
        para2: `預計在2024年完工，佔地2.5公頃之文教用地成立「元智大學新北分部醫護學院」，結合產學研人才，搭配集團內的產業資源， 培育全人智慧醫療人才，以協助因應國家未來智慧醫療人力需求與智慧醫療之推廣。 `
    }]
    return (
        <div className="construction" style={{
            opacity: showDot == "construction" ? 1 : 0,
            pointerEvents: showDot == "construction" ? "auto" : "none"
        }}>
            {[...Array(5)].map((item, i) => {
                return (
                    <div className='dot' key={i}>
                        <FancyBox thumbUrl={svg[3].default} >
                            <BasicContent para={para[i]} />
                        </FancyBox>
                    </div>
                )
            })}
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