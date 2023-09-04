import React from 'react';
import { useState } from 'react';

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function VideoIn({ videoState }) {
    const [skip, setSkip] = useState(false)


    // useEffect(() => {
    //     document.body.style.overflow = skip == false ? "hidden" : "hidden"

    // }, [skip])
    const handleClick = (() => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }
        setSkip(true)
    })
    return (
        <div className="video-in" style={{ opacity: skip == true ? "0" : "1", backgroundColor: "#C3CBC8", pointerEvents: skip == true ? "none" : "auto", transition: "0.8s" }}>
            <div className="full-screen" onClick={handleClick}>
                <img src={require("../../../img/index/svg/logo.svg").default} />
            </div>
        </div>
    )
}

