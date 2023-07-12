
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { EquipmentTitle } from '.'

export default function WindowProtect() {
    const animateRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".titleBox h2 span", {
                stagger: 0.05,
                opacity: 0,
                x: 30
            }).from(".content h4 ", {
                opacity: 0,
                x: 30
            }, "<+0.8").from(".content p", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".content .left img", {
                opacity: 0,
                x: 30
            }, "<").from(".content .left .more", {
                opacity: 0,
                x: 30
            }, "<+0.3").from(".content .right img", {
                opacity: 0,
                y: 30,
                duration: 1.5
            }, "<")
        }, [animateRef]);
        return () => ctx.revert();
    }, [])
    return (
        <section className='sewage' ref={animateRef} style={{ width: "80%", margin: "0 auto", alignItems: "center" }}>
            <div className="left" style={{ flex: "0 0 40%" }}>
                <EquipmentTitle />
                <h4>防霾紗窗</h4>
                <p>
                    •  有效阻隔PM2.5<br />
                    •  抵禦紫外線入侵<br />
                    •  靜電原理排斥/吸附阻隔空汙<br />
                    •  物理攔截捕獲空氣微塵<br />
                    •  透風透光緻密織法，使鮮氧迴圈<br />
                    •  防雨水、抗建材老化、不沾黏、易清潔<br />
                    •  獲歐盟認證有效減緩過敏人群的易過敏症狀
                </p>
                <img src={require("../../../img/equipment/webp/012-window-text.webp").default} style={{ width: "100%", height: "auto", margin: "2vw 0" }} />

            </div>
            <div className="right" style={{ order: -1, flex: "0 0 60%", alignSelf: "center" }}>
                <img src={require("../../../img/equipment/webp/011-window-bg.webp").default} style={{ width: "85%", height: "auto", marginLeft: "-8vw" }} />

            </div>
            <img src={require("../../../img/equipment/webp/013-window-right-bg.webp").default} style={{ position: "absolute", right: "0", bottom: "0", width: "22.5vw", height: "auto" }} />
        </section>
    )
}
