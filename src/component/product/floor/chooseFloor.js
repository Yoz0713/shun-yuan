import React, { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { floorData } from "./data/floorData";
import { BuildingA, BuildingC } from '../../config/svgCollection';
import { useSelector, useDispatch } from 'react-redux';
import { selectFloor } from "../../redux/action/floorNav"

const requireSvg = require.context("../../../../img/product/floor/chooseFloor/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

function FloorNav({ building }) {
    const reverseData = floorData.filter((item) => {
        if (building !== "C") {
            return item.text !== "24F" && item.text !== "23F";
        } else {
            return true;
        }
    });
    const scrollRef = useRef(null)
    const dispatch = useDispatch(null)
    const nav = useSelector(state => state.floorReducer.floor)
    const handleTop = () => {
        let currentScrollTop = scrollRef.current.scrollTop;
        const scrollToTop = currentScrollTop - 250;

        const animate = () => {
            currentScrollTop -= 25;
            scrollRef.current.scrollTop = currentScrollTop;

            if (currentScrollTop > scrollToTop) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    };
    const handleBottom = () => {
        let currentScrollTop = scrollRef.current.scrollTop;
        const scrollToTop = currentScrollTop + 250;

        const animate = () => {
            currentScrollTop += 25;
            scrollRef.current.scrollTop = currentScrollTop;

            if (currentScrollTop < scrollToTop) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }
    return (
        <section className="floorNav" style={{ position: "absolute", top: 0, bottom: 0, margin: "auto 0", left: "22vw" }}>
            <div className="floorBox" ref={scrollRef} onMouseLeave={() => dispatch(selectFloor(null))}>
                <div className="boxContainer" >
                    {reverseData.map((item, i) => {
                        return (
                            <div className="box" style={{ backgroundColor: nav == item.type ? "#c2a357" : "transparent" }} key={item.text} onMouseEnter={() => dispatch(selectFloor(item.type))} >
                                <p style={{ color: nav == item.type ? "#fff" : "#000" }}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="top" onClick={handleTop}>
                <img src={svg[0]} />
            </div>
            <div className="bottom" onClick={handleBottom}>
                <img src={svg[1]} />
            </div>
        </section>
    )
}



function BuildingBox({ type }) {
    const nav = useSelector(state => state.floorReducer.floor);
    const dispatch = useDispatch(null)
    const building = [{
        type: "A",
        img: svg[2].default,
        svg: <BuildingA nav={nav} dispatch={(target) => dispatch(selectFloor(target))} />
    }, {
        type: "B",
        img: svg[2].default,
        svg: <BuildingA nav={nav} dispatch={(target) => dispatch(selectFloor(target))} />
    }, {
        type: "C",
        img: svg[4].default,
        svg: <BuildingC nav={nav} dispatch={(target) => dispatch(selectFloor(target))} />
    }]
    return (
        <div className={`buildingBox buildingBox-${type}`}>
            {building.map((item) => {
                if (item.type == type) {
                    return (
                        <>
                            <img src={item.img} />
                            {item.svg}
                        </>

                    )
                }
            })}

        </div>
    )
}





export default function ChooseFloor() {
    const location = useLocation()
    const queryString = location.search
    const urlParams = new URLSearchParams(queryString);
    const building = urlParams.get('building');
    const [type, setType] = useState(building);
    let nav = useSelector(state => state.floorReducer.floor);
    if (typeof nav == "string") {
        if (nav == "1.5f") {
            nav = "1F夾層"
        }
        nav = nav.toUpperCase();
    }
    return (
        <section className='chooseFloor'>
            <FloorNav building={type} />
            <BuildingBox type={type} />
            <div className="titleBox">
                <h1>{type}<span>棟</span>{nav && `${nav}`}</h1>
            </div>
        </section>
    )
}

