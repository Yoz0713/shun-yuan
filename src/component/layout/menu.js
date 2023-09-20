import React from 'react';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slideChange } from '../redux/type';
import { moveToBuildingTeam } from '../redux/action/buildingTeam';
import { slideChangeAction } from '../redux/action/slideChange';

export default function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="menu" style={{ width: open == false ? "0%" : "100%", transitionDelay: open == true ? "0s" : "1.5s", pointerEvents: open == true ? "auto" : "none" }}>
            <ToggleButton open={open} setOpen={setOpen} />
            <MenuContent open={open} setOpen={setOpen} />
        </div>
    )
}

function MenuContent({ open, setOpen }) {
    const dispatch = useDispatch()
    const [extend, setExtend] = useState(new Array(7).fill(false))

    const title = [{
        ch: "國際城市",
        en: "LOCATION"
    }, {
        ch: "幸福版圖",
        en: "LIFE"
    }, {
        ch: "品牌團隊",
        en: "TEAM"
    }, {
        ch: "當代建築",
        en: "BUILDING"
    }, {
        ch: "極上工藝",
        en: "MATERIAL"
    }, {
        ch: "全球嚴選",
        en: "EQUIPMENT"
    }, {
        ch: "房市熱點",
        en: "NEWS"
    }]
    const item = [[{
        id: "/dayuan",
        ch: "test",
        slide: 1,
    }, {
        id: "/construction",
        ch: "test",
        slide: 1,
    }, {
        id: "/prospect",
        ch: "test",
        slide: 1,
    }, {
        id: "/urban",
        ch: "test",
        slide: 1,
    }], [{
        id: "/traffic",//"/traffic",
        ch: "test",
        slide: 2,
    }, {
        id: "/lifefunction",//"/lifefunction",
        ch: "test",
        slide: 2,
    }], [{
        id: "/team/coporation",
        ch: "test",
        slide: 3,
    }, {
        id: "/team/designTeam/building",
        ch: "test",
        slide: 3,
    }, {
        id: "/team/designTeam/postulate",
        ch: "test",
        slide: 3,
    }], [{
        id: "/product",
        ch: "test",
        slide: 4,
    }], [{
        id: "/method/structure",
        ch: "test",
        slide: 5,
    }, {
        id: "/method/waterProof",
        ch: "test",
        slide: 5,
    }, {
        id: "/method/sweet",
        ch: "test",
        slide: 5,
    }], [{
        id: "/equipment/kitchen", ch: "test",
        slide: 6,
    }, {
        id: "/equipment/bathroom",
        ch: "test備",
        slide: 6,
    }, {
        id: "/equipment/electronLock",
        ch: "test",
        slide: 6,
    }, {
        id: "/equipment/window",
        ch: "test",
        slide: 6,
    }, {
        id: "/equipment/door",
        ch: "test",
        slide: 6,
    }, {
        id: "/equipment/floor",
        ch: "test",
        slide: 6,
    }, {
        id: "/equipment/purifier",
        ch: "test",
        slide: 6,
    }], [{
        id: "/market",
        ch: "test",
        slide: 7,
    }, {
        id: "/news",
        ch: "test",
        slide: 7,
    }, {
        id: "/calculation",///calculation
        ch: "test",
        slide: 7,
    }]]

    return (
        <div className="menu-content" style={{ WebkitMaskPositionX: open == true ? "-260vw" : "  0vw", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="menu-logo">
                <Link to={"/"} onClick={() => {
                     setOpen(false);
                     dispatch(slideChangeAction(-1))
                    // dispatch(fullActive())
                }}>
                    <img src={require("@/img/index/svg/logo-white.svg").default} />
                </Link>
            </div>
            <div className="menu-option">
                {[...Array(7)].map((itm, i) => {
                    return (
                        <Option key={i} index={i} setOpen={setOpen} title={title[i]} item={item[i]} extend={extend} setExtend={setExtend} handleClick={() => {
                            let arr;
                            arr = new Array(7).fill(false)
                            if (!extend[i]) {
                                arr[i] = true;
                            }
                            setExtend(arr)
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

function Option({ title, item, setOpen, extend, handleClick, index }) {
    const location = useLocation()
    const dispatch = useDispatch()


    return (
        <div className="option">
            <div className="option-wrapper">
                <div className="title-box" onClick={() => {
                    handleClick();
                }}>
                    <h2>{title.en}</h2>
                    <h2>{title.ch}</h2>
                </div>
                <ul className="nav" style={{ transform: extend[index] ? "scaleY(1)" : "scaleY(0)" }}>
                    {item.map((item, i) => {
                        return <li key={item.id} onClick={() => {
                            dispatch({ type: slideChange, payload: item.slide })
                            if (item.id == null) {
                                dispatch(moveToBuildingTeam("team3"))
                            }
                            setOpen(false)
                        }} style={{ pointerEvents: item.id == null ? "auto" : location.pathname == item.id ? "none" : "auto" }}>
                            <Link to={`${item.id == null ? "/" : item.id}`}>
                                <div className="square"></div>
                                <p style={{ color: item.id == null ? "#fff" : location.pathname == item.id ? "#747474" : "#fff" }} >{item.ch}</p>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>

        </div>
    )
}





function ToggleButton({ open, setOpen }) {
    const handleClick = () => {
        setOpen(!open)

    }


    return (
        <div className="toggle-button" onClick={handleClick} style={{ right: 0, pointerEvents: "auto" }}>

            <div className={`hamburger ${open == true ? "hamburger-active" : null}`}>

            </div>


        </div>
    )
}

