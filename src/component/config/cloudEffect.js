import React from 'react'

export default function CloudEffect({ children, style, start }) {
    const transition = start ? "2s" : "0s"; // 根據 start 值決定過渡時間
    const transitionDelay = start ? "0s" : "0.6s"; // 根據 start 值決定過渡延遲時間

    return (
        <div style={{
            position: "relative",
            maskImage: `url(${require("../../../img/index/webp/cloud-mask_1.webp").default})`,
            WebkitMaskImage: `url(${require("../../../img/index/webp/cloud-mask_1.webp").default})`,
            WebkitMaskSize: start ? "100%" : "0%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            transition: `-webkit-mask-size ${transition} ${transitionDelay}`,
            willChange: "-webkit-mask-size",
            transform: "translate3d(0, 0, 0)",
            ...style
        }}>{children}</div>
    )
}

