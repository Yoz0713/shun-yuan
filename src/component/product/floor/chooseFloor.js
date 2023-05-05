import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { floorData } from "./data/floorData"
const requireSvg = require.context("../../../../img/product/floor/chooseFloor/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

function FloorNav() {
    const reverseData = floorData.reverse()
    return (
        <section className="floorNav">
            <div className="floorBox">
                <div className="boxContainer">
                    {reverseData.map((item, i) => {
                        return (
                            <div className="box">
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="top">
                <img src={svg[0]} />
            </div>
            <div className="bottom">
                <img src={svg[1]} />
            </div>
        </section>
    )
}









export default function ChooseFloor() {
    const location = useLocation()
    const queryString = location.search
    const urlParams = new URLSearchParams(queryString);
    const building = urlParams.get('building');
    const [type, setType] = useState(building)
    return (
        <section className='chooseFloor'>
            <h1>{building}</h1>
            <FloorNav />
        </section>
    )
}

